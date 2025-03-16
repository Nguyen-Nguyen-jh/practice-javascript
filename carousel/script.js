window.carousel = function (container, images) {
  if (!container || !Array.isArray(images) || images.length === 0) {
    console.error('Invalid parameters');
    return;
  }

  // Tạo các phần tử
  const prevButton = document.createElement('button');
  prevButton.classList.add('prev');
  prevButton.id = 'prevButton';
  prevButton.innerHTML = '&#10094;';

  const nextButton = document.createElement('button');
  nextButton.classList.add('next');
  nextButton.id = 'nextButton';
  nextButton.innerHTML = '&#10095;';

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const thumbnailsContainer = document.createElement('div');
  thumbnailsContainer.classList.add('thumbnails');

  // Thêm hình ảnh vào carousel và thumbnails
  images.forEach((imgData) => {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt || '';
    carousel.appendChild(img);

    const thumb = document.createElement('img');
    thumb.src = imgData.src;
    thumb.alt = imgData.alt || '';
    thumb.classList.add('thumbnail');
    thumbnailsContainer.appendChild(thumb);
  });

  // Gắn các phần tử vào container
  container.appendChild(prevButton);
  container.appendChild(carousel);
  container.appendChild(nextButton);
  container.appendChild(thumbnailsContainer);

  const imagesList = carousel.getElementsByTagName('img');
  const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 600;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % imagesList.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + imagesList.length) % imagesList.length;
    updateCarousel();
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
};
