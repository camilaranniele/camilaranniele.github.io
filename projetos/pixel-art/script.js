// Função criada com ajuda do professor Bernardo, Rafael Santos e Emerson Moreira
function createPixels(n) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let index = 1; index <= n; index += 1) {
    // Criar uma div
    const newLine = document.createElement('div');

    // Criar uma repeticao pra criar x pixels
    for (let i = 1; i <= n; i += 1) {
      // criar um pixel
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      // A cada pixel criado, adiciona-lo no div de fora
      newLine.appendChild(newPixel);
    }
    // Adicionar essa linha em pixel-board
    pixelBoard.appendChild(newLine);
  }
}

function selectColor(event) {
  const listColorElements = document.querySelectorAll('.color');
  for (let index = 0; index < listColorElements.length; index += 1) {
    const element = listColorElements[index];
    element.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addColorPaletteListeners() {
  const listColorElements = document.querySelectorAll('.color');
  for (let index = 0; index < listColorElements.length; index += 1) {
    const element = listColorElements[index];
    element.addEventListener('click', selectColor);
  }
}

function colorizePixel(event) {
  const colorSelected = document.querySelector('.selected');
  const captchaColor = window.getComputedStyle(colorSelected, null);
  const color = captchaColor.getPropertyValue('background-color');
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = color;
}

function addPixelsListeners() {
  const listPixelsElements = document.querySelectorAll('.pixel');
  console.log(listPixelsElements);
  for (let index = 0; index < listPixelsElements.length; index += 1) {
    const element = listPixelsElements[index];
    element.addEventListener('click', colorizePixel);
  }
}

function addButton() {
  const sectionButton = document.querySelector('#section-button');
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.id = 'clear-board';
  sectionButton.appendChild(button);
}

function addButtonListenner() {
  const button = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');
  button.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      const element = pixels[index];
      element.style.backgroundColor = 'white';
    }
  });
}
// Função criada com ajuda do Rafael Santos e Emerson Moreira
function inputValuePixel() {
  const input = document.querySelector('#board-size');
  const button = document.querySelector('#generate-board');
  button.addEventListener('click', () => {
    if (input.value < 5 && input.value > 0) {
      input.value = 5;
    } else if (input.value > 50) {
      input.value = 50;
    } else if (input.value === '') {
      alert('Board inválido!');
    }

    console.log(input.value);
    createPixels(input.value);
  });
}

window.onload = () => {
  createPixels(5);
  addColorPaletteListeners();
  addPixelsListeners();
  addButton();
  addButtonListenner();
  inputValuePixel();
};
