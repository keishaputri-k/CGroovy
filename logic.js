// Carousel
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

// Dragging logic
slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

// Auto-scroll logic with looping effect
let currentIndex = 0;
const items = document.querySelectorAll('.gallery li');
const itemWidth = slider.clientWidth + 16; // 16px = 1rem gap

function autoScroll() {
  currentIndex++;
  
  // If we're at the end of the list, scroll back to the start
  if (currentIndex >= items.length) {
    currentIndex = 0; // Reset to first item
    slider.scrollLeft = 0; // Optionally reset scroll position immediately
  }
  
  slider.scrollTo({
    left: currentIndex * itemWidth,
    behavior: 'smooth'
  });
}

setInterval(autoScroll, 5000); // Change every 5 seconds


//card featured
const rotatorHolder = document.getElementById('album-rotator-holder');

// Duplicate the content to make infinite scroll illusion
rotatorHolder.innerHTML += rotatorHolder.innerHTML;

let scrollSpeed = 0.5; // Adjust speed here
let position = 0;

let isDragging = false;
let dragStartX = 0;
let dragStartPosition = 0;

// Auto-move animation
function animate() {
  if (!isDragging) {
    position -= scrollSpeed;
    if (Math.abs(position) >= rotatorHolder.scrollWidth / 2) {
      position = 0;
    }
    rotatorHolder.style.transform = `translateX(${position}px)`;
  }
  requestAnimationFrame(animate);
}

animate();

// Dragging
rotatorHolder.addEventListener('mousedown', (e) => {
  isDragging = true;
  dragStartX = e.pageX;
  dragStartPosition = position;
  rotatorHolder.style.cursor = 'grabbing';
});

rotatorHolder.addEventListener('mouseleave', () => {
  isDragging = false;
  rotatorHolder.style.cursor = 'grab';
});

rotatorHolder.addEventListener('mouseup', () => {
  isDragging = false;
  rotatorHolder.style.cursor = 'grab';
});

rotatorHolder.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.pageX;
  const walk = x - dragStartX;
  position = dragStartPosition + walk;
  rotatorHolder.style.transform = `translateX(${position}px)`;
});


