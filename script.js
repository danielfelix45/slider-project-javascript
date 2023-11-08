// Declaração de variáveis
let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

// Configuração inicial do slider
const sliderWidth = document.querySelector('.slider--width');
const sliderControls = document.querySelector('.slider--controls');
sliderWidth.style.width = `calc(100vw * ${totalSlides})`;
sliderControls.style.height = `${document.querySelector('.slider').clientHeight}px`;

// Função para ir para o slide anterior
function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

// Função para ir para o próximo slide
function goNext() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateMargin();
}

// Função para atualizar a margem do slider
function updateMargin() {
  const sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  const newMargin = currentSlide * sliderItemWidth;
  sliderWidth.style.marginLeft = `-${newMargin}px`;
}

// Iniciar o slider automaticamente a cada 4 segundos
setInterval(goNext, 5000);
