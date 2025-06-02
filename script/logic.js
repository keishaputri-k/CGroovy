// Carousel
const SCROLL_SPEED = 3;
let isDown = false;
let startX;
let scrollLeft;

const $slider = $('.gallery');
const $items = $('.gallery li');
const itemWidth = $slider.outerWidth() + 16; // 16px = 1rem gap

$slider.on('mousedown', function(e) {
  isDown = true;
  $slider.addClass('active');
  startX = e.pageX - $slider.offset().left;
  scrollLeft = $slider.scrollLeft();
});

$slider.on('mouseleave mouseup', function() {
  isDown = false;
  $slider.removeClass('active');
});

$slider.on('mousemove', function(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - $slider.offset().left;
  const walk = (x - startX) * SCROLL_SPEED;
  $slider.scrollLeft(scrollLeft - walk);
});

// Auto-scroll logic with looping effect
let currentIndex = 0;

function autoScroll() {
  currentIndex++;
  if (currentIndex >= $items.length) {
    currentIndex = 0;
    $slider.scrollLeft(0);
  }

  $slider.animate({
    scrollLeft: currentIndex * itemWidth
  }, 500); // animation duration in ms
}

setInterval(autoScroll, 5000); // Change every 5 seconds


// Card featured (rotator)
const $rotatorHolder = $('#album-rotator-holder');
$rotatorHolder.html($rotatorHolder.html() + $rotatorHolder.html()); // Duplicate content

let scrollSpeed = 0.5;
let position = 0;

let isDragging = false;
let dragStartX = 0;
let dragStartPosition = 0;

function animate() {
  if (!isDragging) {
    position -= scrollSpeed;
    if (Math.abs(position) >= $rotatorHolder[0].scrollWidth / 2) {
      position = 0;
    }
    $rotatorHolder.css('transform', `translateX(${position}px)`);
  }
  requestAnimationFrame(animate);
}

animate();

$rotatorHolder.on('mousedown', function(e) {
  isDragging = true;
  dragStartX = e.pageX;
  dragStartPosition = position;
  $rotatorHolder.css('cursor', 'grabbing');
});

$rotatorHolder.on('mouseleave mouseup', function() {
  isDragging = false;
  $rotatorHolder.css('cursor', 'grab');
});

$rotatorHolder.on('mousemove', function(e) {
  if (!isDragging) return;
  const x = e.pageX;
  const walk = x - dragStartX;
  position = dragStartPosition + walk;
  $rotatorHolder.css('transform', `translateX(${position}px)`);
});

document.addEventListener("DOMContentLoaded", function () {
        // Map featured card IDs to song IDs (adjust as needed)
        const featuredMap = {
          featured1: 4,
          featured2: 3,
          featured3: 13,
          featured4: 10,
          featured5: 5
        };
        Object.keys(featuredMap).forEach(function(cardId) {
  const el = document.getElementById(cardId);
  if (el) {
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      // Replace regex with split and pop
      const fullPath = window.location.pathname;
      const pathParts = fullPath.split('/');
      const currentPage = pathParts[pathParts.length - 1];
      sessionStorage.setItem("cg_lastPage", currentPage);
      window.location.href = "sd.html?id=" + featuredMap[cardId];
    });
  }
});  
       });