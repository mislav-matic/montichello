function sliderModule() {
  let sliderActive = 0;

  let topSliders = document.querySelectorAll(
    '#latest-news .content .tile'
  );

  function shuffleSlider() {
    topSliders[sliderActive].style.display = 'none';
    sliderActive = (sliderActive + 1) % 3;
    topSliders[sliderActive].style.display = 'flex';
  }

  topSliders[0].style.display = 'flex';
  setInterval(shuffleSlider, 3000);
}

addEventListener('DOMContentLoaded', (event) => sliderModule());
