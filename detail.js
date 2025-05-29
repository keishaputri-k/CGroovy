
// Song Detail
console.log("song2:", document.getElementById("song2"));

  document.addEventListener("DOMContentLoaded", function () {


// Direct dari sc ke detail by id
 const s1 = document.getElementById("song1");
  if (s1) {
    s1.addEventListener("click", function () {
      window.location.href = "sd.html?id=1";
    });
  }

  const s2 = document.getElementById("song2");
  if (s2) {
    s2.addEventListener("click", function () {
      window.location.href = "sd.html?id=2";
    });
  }

  const s3 = document.getElementById("song3");
  if (s3) {
    s3.addEventListener("click", function () {
      window.location.href = "sd.html?id=3";
    });
  }

  const s4 = document.getElementById("song4");
  if (s4) {
    s4.addEventListener("click", function () {
      window.location.href = "sd.html?id=4";
    });
  }

  const s5 = document.getElementById("song5");
  if (s5) {
    s5.addEventListener("click", function () {
      window.location.href = "sd.html?id=5";
    });
  }

  const s6 = document.getElementById("song6");
  if (s6) {
    s6.addEventListener("click", function () {
      window.location.href = "sd.html?id=6";
    });
  }

  const s7 = document.getElementById("song7");
  if (s7) {
    s7.addEventListener("click", function () {
      window.location.href = "sd.html?id=7";
    });
  }

  const s8 = document.getElementById("song8");
  if (s8) {
    s8.addEventListener("click", function () {
      window.location.href = "sd.html?id=8";
    });
  }

  const s9 = document.getElementById("song9");
  if (s9) {
    s9.addEventListener("click", function () {
      window.location.href = "sd.html?id=9";
    });
  }

  const s10 = document.getElementById("song10");
  if (s10) {
    s10.addEventListener("click", function () {
      window.location.href = "sd.html?id=10";
    });
  }

  const s11 = document.getElementById("song11");
  if (s11) {
    s11.addEventListener("click", function () {
      window.location.href = "sd.html?id=11";
    });
  }

  const s12 = document.getElementById("song12");
  if (s12) {
    s12.addEventListener("click", function () {
      window.location.href = "sd.html?id=12";
    });
  }

  const s13 = document.getElementById("song13");
  if (s13) {
    s13.addEventListener("click", function () {
      window.location.href = "sd.html?id=13";
    });
  }

  const s14 = document.getElementById("song14");
  if (s14) {
    s14.addEventListener("click", function () {
      window.location.href = "sd.html?id=14";
    });
  }

  const s15 = document.getElementById("song15");
  if (s15) {
    s15.addEventListener("click", function () {
      window.location.href = "sd.html?id=15";
    });
  } 


  // Ganti Isi Detail Song
  const params = new URLSearchParams(window.location.search);
  const songId = params.get("id");

  const songs = {
    1: {
      title: "Reckless",
      artist: "Madison Beer",
      image: "/assets/pop/reckless.png",
      audio: "/assets/pop/reckless.mp3",
      desc: "A heartfelt pop ballad about vulnerability and heartbreak.",
      year: 2022,
      lyrics: `Hey, this is a story I hate
    And telling it might make me break
    But I'll tell it anyway
    This chapter's about
    How you said there was nobody else
    Then you got up and went to her house
    You guys always left me out

    I still have the letter you wrote
    When you told me that I was the only girl
    You'd ever want in your life
    I guess my friends were right

    Each day goes by and each night, I cry
    Somebody saw you with her last night
    You gave me your word, "Don't worry 'bout her"
    You might love her now, but you loved me first
    Said you'd never hurt me, but here we are
    Oh, you swore on every star
    How could you be so reckless with my heart?

    You check in and out
    Of my heart like a hotel
    And she must be perfect, oh well
    I hope you both go to hell

    I still have the letter you wrote
    When you told me that I was the only girl
    You'd ever want in your life
    I guess my friends were right

    Each day goes by and each night, I cry
    Somebody saw you with her last night
    You gave me your word, "Don't worry 'bout her"
    You might love her now, but you loved me first
    Said you'd never hurt me, but here we are (here we are)
    Oh, you swore on every star
    How could you be so reckless with my heart? (Heart)

    How could you be so reckless?
    How could you be so reckless?
    How could you be so reckless with someone's heart?

    Hey, this is a story I hate
    But I told it to cope with the pain
    I'm so sorry if you can relate`,
      genre: "Pop",
      type: "Group",
    
    },
    2: {
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "assets/the1975.png",
      audio: "assets/blinding-lights.mp3",
      year: 2020,
      desc: "Belum ada",
      lyrics: `I said, ooh, I'm blinded by the lights...`,
      genre: "Pop",
      type: "Group",
    },
    3: {
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      image: "assets/the1975.png",
      audio: "assets/good-4-u.mp3",
      year: 2021,
      desc: "Belum ada",
      lyrics: `Well, good for you, I guess you moved on really easily...`,
      genre: "Pop",
      type: "Group",  
    },
    4: {
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      image: "assets/the1975.png",
      audio: "assets/good-4-u.mp3",
      year: 2021,
      desc: "Belum ada",
      lyrics: `Well, good for you, I guess you moved on really easily...`,
      genre: "R&B",
      type: "Group",
    },
    5: {
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      image: "assets/the1975.png",
      audio: "assets/good-4-u.mp3",
      year: 2021,
      desc: "Belum ada",
      lyrics: `Well, good for you, I guess you moved on really easily...`,
      genre: "R&B",
      type: "Group",
      
    } ,
    6: {
      title: "Saturn",
      artist: "SZA",
      image: "/assets/rnb/saturn.png",
      audio: "/assets/rnb/saturn.mp3",
      year: 2024,
      desc: "Belum ada",
      lyrics: `If there's another universe
Please make some noise (noise)
Give me a sign (sign)
This can't be life
If there's a point to losing love
Repeating pain (why?)
It's all the same
I hate this place

Stuck in this paradigm
Don't believe in paradise
This must be what Hell is like
There's got to be more, got to be more
Sick of this head of mine
Intrusive thoughts, they paralyze
Nirvana's not as advertised
There's got to be more, been here before

Ooh (ooh, ooh)
Life's better on Saturn
Got to break this pattern
Of floating away
Ooh (ooh, ooh)
Find something worth saving
It's all for the taking
I always say

I'll be better on Saturn
None of this matters
Dreaming of Saturn, oh

If karma's really real
How am I still here?
Just seems so unfair
I could be wrong though
If there's a point to being good
Then where's my reward?
The good die young and poor
I gave it all I could

Stuck in this terradome
All I see is terrible
Making us hysterical
There's got to be more, got to be more
Sick of this head of mine
Intrusive thoughts, they paralyze
Nirvana's not as advertised
There's got to be more, been here before

Ooh (ooh, ooh)
Life's better on Saturn
Got to break this pattern
Of floating away
Ooh (ooh, ooh)
Find something worth saving
It's all for the taking
I always say

I'll be better on Saturn
None of this matters
Dreaming of Saturn, oh` ,
      genre: "R&B",
      type: "Group",
      
    },

      11: {
      title: "Whiplash",
      artist: "Aespa",
      image: "assets/kpop/whiplash.png",
      audio: "assets/kpop/whiplash.mp3",
      year: 2021,
      desc: "Belum ada",
      lyrics: `one look, give 'em whiplash
Beat drop with a big flash
집중해 좀 더 think fast
이유 넌 이해 못 해 uh
왜 이제야 know I did that, uh
Day one, know I been bad, uh
Don't stop 흔들린 채
무리해도 can't touch that (can't touch that)

Under pressure, body sweating, can you focus? (Yeah)
어디서나 거침없어 I'm the coldest
오직 나만이 이 판을 바꿀 changer
Just close your eyes, breathe in and visualize

One look, give 'em whiplash
Beat drop with a big flash
집중해 좀 더 think fast
이유 넌 이해 못 해 uh
왜 이제야 know I did that (yeah)
Day one, know I been bad
Don't stop 흔들린 채 (yeah)
무리해도 can't touch that (can't touch that)

Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, one look, give 'em whiplash

Fancy 이건 참 화려해
It's glowing and it's flashy (yeah)
알아, 적당함이 뭔지 keep it classy
따라 하지 넌 또 하나부터 열까지 (yeah)
아닌척하지 (yeah)

Under pressure, body sweating, can you focus? (Hoo)
I deliver, I can promise, I'm the coldest (cold)
외면해도 소용없지 don't you blow it?
Just close your eyes, breathe in and visualize

시작되는 순간 끝나버린 판단
기횐 오직 one time, unforgettable
찾아낸 the right light 사라지지 않아
눈에 새긴 one time, unforgettable

One look, give 'em whiplash (sheesh)
Beat drop with a big flash
집중해 좀 더 think fast
이유 넌 이해 못 해 uh
왜 이제야 know I did that, uh (yeah)
Day one, know I been bad, uh
Don't stop 흔들린 채 (yeah)
무리해도 can't touch that (can't touch that)

I'm the highlight 비춰 red light
Yeah, tonight it's all about me (all about me)
You know it's my site 거친 next sigh
만들어갈 history

One look, give 'em whiplash (whip-whip, sheesh)
Beat drop with a big flash (yeah)
따라와 어서 move fast (move, move, move)
이유 넌 이해 못 해 uh (yeah)
왜 이제야 know I did that, uh (did that, yeah)
Day one, know I been bad, uh (been bad)
Don't stop 흔들린 채 (yeah)
다가와도 can't touch that (can't touch that)\

Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, whip-whiplash
Whip-whiplash, one look, give 'em whiplash`,
      genre: "K-Pop",
      type: "Group",
      }



    
  };

  const song = songs[songId];

  if (song) {
    document.getElementById("banner-song-title").innerText = song.title;
    document.getElementById("banner-artist-name").innerText = song.artist;
    document.getElementById("banner-song-type").innerText = song.type;
    document.getElementById("banner-song-year").innerText = song.year;
    document.getElementById("banner-album-art").src = song.image;
    document.getElementById("banner-genre").innerText = song.genre
    document.getElementById("song-audio").src = song.audio;
    document.getElementById("song-desc").innerText = song.desc
    document.getElementById("song-lyrics").innerText = song.lyrics;
  } else {
    document.getElementById("banner-song-title").innerText = "Song not found";
  }


  // Banner image muter pas play, berhenti pas stop
  const audio = document.getElementById("song-audio");
    const albumArt = document.getElementById("banner-album-art");

    let angle = 0;
    let rotating = false;
    let animationFrame;

    function rotateDisc() {
      if (!rotating) return;
      angle += 0.12; // atur kecepatan putar
      albumArt.style.transform = `rotate(${angle}deg)`;
      animationFrame = requestAnimationFrame(rotateDisc);
    }

    audio.addEventListener("play", function () {
      if (!rotating) {
        rotating = true;
        rotateDisc();
      }
    });

    audio.addEventListener("pause", function () {
      rotating = false;
      cancelAnimationFrame(animationFrame);
    });


});