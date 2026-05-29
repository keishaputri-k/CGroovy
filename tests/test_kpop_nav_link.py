"""
Regression tests for the K-Pop navigation link bug.

Bug summary (fixed in commit 1cc61a5):
  1. kpop.html — the K-Pop <li> link was entirely missing from the
     dropdown navigation menu.
  2. rnb.html  — the K-Pop link had a malformed href attribute
     (missing opening quote: href=../view/kpop.html" instead of
     href="../view/kpop.html").

These tests parse the HTML files and verify that every genre page
contains a properly-formed K-Pop link inside its dropdown navigation.
"""

import os
import re
import unittest
from html.parser import HTMLParser

VIEW_DIR = os.path.join(os.path.dirname(__file__), "..", "view")

GENRE_PAGES = ["kpop.html", "rnb.html", "pop.html", "sc.html"]

EXPECTED_KPOP_HREF = "../view/kpop.html"


class DropdownNavParser(HTMLParser):
    """Extract all <a> tags inside <ul class="dropdown-content">."""

    def __init__(self):
        super().__init__()
        self.in_dropdown = False
        self.depth = 0
        self.links = []  # list of (href, text) tuples

        self._current_href = None
        self._current_text = ""
        self._in_link = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)

        if tag == "ul" and "dropdown-content" in attrs_dict.get("class", ""):
            self.in_dropdown = True
            self.depth = 0

        if self.in_dropdown and tag == "ul":
            self.depth += 1

        if self.in_dropdown and tag == "a":
            self._current_href = attrs_dict.get("href")
            self._current_text = ""
            self._in_link = True

    def handle_data(self, data):
        if self._in_link:
            self._current_text += data

    def handle_endtag(self, tag):
        if self._in_link and tag == "a":
            self.links.append((self._current_href, self._current_text.strip()))
            self._in_link = False

        if self.in_dropdown and tag == "ul":
            self.depth -= 1
            if self.depth <= 0:
                self.in_dropdown = False


def parse_dropdown_links(filepath):
    """Return a list of (href, text) from the dropdown nav of an HTML file."""
    with open(filepath, encoding="utf-8") as f:
        content = f.read()
    parser = DropdownNavParser()
    parser.feed(content)
    return parser.links


def get_raw_dropdown_html(filepath):
    """Return the raw HTML string of the <ul class="dropdown-content"> block."""
    with open(filepath, encoding="utf-8") as f:
        content = f.read()
    match = re.search(
        r'<ul\s+class="dropdown-content">(.*?)</ul>', content, re.DOTALL
    )
    return match.group(1) if match else ""


class TestKpopNavLinkPresent(unittest.TestCase):
    """Verify the K-Pop link exists in every genre page's dropdown nav."""

    def test_kpop_link_exists_in_kpop_page(self):
        """Regression: kpop.html was missing the K-Pop <li> entirely."""
        links = parse_dropdown_links(os.path.join(VIEW_DIR, "kpop.html"))
        kpop_links = [(h, t) for h, t in links if t == "K-Pop"]
        self.assertTrue(
            len(kpop_links) > 0,
            "kpop.html dropdown is missing the K-Pop navigation link",
        )

    def test_kpop_link_exists_in_rnb_page(self):
        """Regression: rnb.html had a malformed K-Pop link."""
        links = parse_dropdown_links(os.path.join(VIEW_DIR, "rnb.html"))
        kpop_links = [(h, t) for h, t in links if t == "K-Pop"]
        self.assertTrue(
            len(kpop_links) > 0,
            "rnb.html dropdown is missing the K-Pop navigation link",
        )

    def test_kpop_link_present_on_all_genre_pages(self):
        """Every genre page must include a K-Pop link in its dropdown."""
        for page in GENRE_PAGES:
            filepath = os.path.join(VIEW_DIR, page)
            links = parse_dropdown_links(filepath)
            kpop_links = [(h, t) for h, t in links if t == "K-Pop"]
            self.assertTrue(
                len(kpop_links) > 0,
                f"{page} dropdown is missing the K-Pop navigation link",
            )


class TestKpopNavLinkHref(unittest.TestCase):
    """Verify the K-Pop link href is correctly formed on every genre page."""

    def test_kpop_href_correct_in_rnb_page(self):
        """Regression: rnb.html href was missing the opening quote."""
        links = parse_dropdown_links(os.path.join(VIEW_DIR, "rnb.html"))
        kpop_links = [(h, t) for h, t in links if t == "K-Pop"]
        self.assertTrue(len(kpop_links) > 0, "K-Pop link not found in rnb.html")
        self.assertEqual(
            kpop_links[0][0],
            EXPECTED_KPOP_HREF,
            f"rnb.html K-Pop href is '{kpop_links[0][0]}', "
            f"expected '{EXPECTED_KPOP_HREF}'",
        )

    def test_kpop_href_correct_in_kpop_page(self):
        """Regression: kpop.html was missing the link entirely."""
        links = parse_dropdown_links(os.path.join(VIEW_DIR, "kpop.html"))
        kpop_links = [(h, t) for h, t in links if t == "K-Pop"]
        self.assertTrue(len(kpop_links) > 0, "K-Pop link not found in kpop.html")
        self.assertEqual(
            kpop_links[0][0],
            EXPECTED_KPOP_HREF,
            f"kpop.html K-Pop href is '{kpop_links[0][0]}', "
            f"expected '{EXPECTED_KPOP_HREF}'",
        )

    def test_kpop_href_correct_on_all_genre_pages(self):
        """Every genre page must point the K-Pop link to the correct URL."""
        for page in GENRE_PAGES:
            filepath = os.path.join(VIEW_DIR, page)
            links = parse_dropdown_links(filepath)
            kpop_links = [(h, t) for h, t in links if t == "K-Pop"]
            self.assertTrue(
                len(kpop_links) > 0, f"K-Pop link not found in {page}"
            )
            self.assertEqual(
                kpop_links[0][0],
                EXPECTED_KPOP_HREF,
                f"{page} K-Pop href is '{kpop_links[0][0]}', "
                f"expected '{EXPECTED_KPOP_HREF}'",
            )


class TestKpopNavLinkNoMalformedHref(unittest.TestCase):
    """Verify no malformed href attributes exist in the dropdown nav HTML."""

    def test_no_unquoted_href_in_rnb_page(self):
        """Regression: rnb.html had href=../view/kpop.html" (missing open quote)."""
        raw = get_raw_dropdown_html(os.path.join(VIEW_DIR, "rnb.html"))
        malformed = re.findall(r'href=[^"\s][^"]*"', raw)
        self.assertEqual(
            malformed,
            [],
            f"rnb.html dropdown contains malformed href attribute(s): {malformed}",
        )

    def test_no_unquoted_href_in_kpop_page(self):
        """Regression: ensure kpop.html has no malformed href attributes."""
        raw = get_raw_dropdown_html(os.path.join(VIEW_DIR, "kpop.html"))
        malformed = re.findall(r'href=[^"\s][^"]*"', raw)
        self.assertEqual(
            malformed,
            [],
            f"kpop.html dropdown contains malformed href attribute(s): {malformed}",
        )

    def test_no_unquoted_href_on_all_genre_pages(self):
        """No genre page should have malformed href attributes in the dropdown."""
        for page in GENRE_PAGES:
            filepath = os.path.join(VIEW_DIR, page)
            raw = get_raw_dropdown_html(filepath)
            malformed = re.findall(r'href=[^"\s][^"]*"', raw)
            self.assertEqual(
                malformed,
                [],
                f"{page} dropdown contains malformed href attribute(s): {malformed}",
            )


if __name__ == "__main__":
    unittest.main()
