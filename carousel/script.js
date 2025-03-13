const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carousel = document.querySelector('.carousel');
const images = carousel.getElementsByTagName('img');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 600; // 600px là chiều rộng của mỗi ảnh
  carousel.style.transform = `translateX(${offset}px)`;
}

// Next button functionality
nextButton.addEventListener('click', function () {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0; // Nếu đã đến ảnh cuối, quay lại ảnh đầu
  }

  updateCarousel();
});

// Prev button functionality
prevButton.addEventListener('click', function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Nếu đã đến ảnh đầu, quay lại ảnh cuối
  }

  updateCarousel();
});

// Thumbnails click functionality
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});
