const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slide').children;

let currentSlide = 0;

function showSlide(n) {
  if (n > slides.length - 1) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.opacity = i === currentSlide ? 1 : 0;
  });
}

showSlide(currentSlide); 

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slide').children;

let currentSlide = 0;

function showSlide(n) {
  if (n > slides.length - 1) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.opacity = i === currentSlide ? 1 : 0;
  });
}

showSlide(currentSlide); // Show the first slide initially

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));