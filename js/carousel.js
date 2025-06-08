let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  // Loop infinito de slides
  currentSlide = (index + totalSlides) % totalSlides;

  slides.forEach((slide, i) => {
    slide.style.display = (i === currentSlide) ? 'block' : 'none';
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000); // Troca automática a cada 4 segundos
});
