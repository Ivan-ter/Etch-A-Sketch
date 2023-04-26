let sketchCells = document.querySelector('input');
let sketchSize = document.querySelector('p');
let squareSize = 10;
const divCont = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');

createSketch(squareSize);

sketchCells.addEventListener('input', function (e) {
  squareSize = e.target.value;
  sketchSize.textContent = `${squareSize}`;
});

function createDivs(size) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

function createSketch(squareSize) {
  for (let i = 0; i < squareSize; i++) {
    for (let j = 0; j < squareSize; j++) {
      divCont.appendChild(createDivs(divCont.clientWidth / squareSize));
    }
  }
}

function reset() {
  while (divCont.firstChild) {
    divCont.removeChild(divCont.lastChild);
  }
  createSketch(squareSize);
}

resetBtn.addEventListener('click', reset);

divCont.addEventListener('click', function (e) {
  
  if (e.target.matches('.cell')) {
    e.target.classList.add('active');
  }
});




