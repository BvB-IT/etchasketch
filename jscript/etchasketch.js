let bgColor;
let change;
let currentOpacity;

document.getElementById(".choose button");
document.addEventListener("click", createGrid);

function userChoiceColumns() {
  let userSelectionColumns = prompt(
    "Give desired Columns-size between 0 and 100 here",
    "gridSize"
  );
  userSelectionColumns = Number(userSelectionColumns);
  let gridSizeColumns = userSelectionColumns;
  return gridSizeColumns;
}

function userChoiceRows() {
  let userSelectionRows = prompt(
    "Give desired Rowsize between 0 and 100 here",
    "gridSize"
  );
  userSelectionRows = Number(userSelectionRows);
  let gridSizeRows = userSelectionRows;
  return gridSizeRows;
}

function darkening(event) {
  for (let i = 0; i < 1; i + 0.1) {
    currentOpacity = i;
  }
  let darker = event.target;
  darker.filter.style.opacity = currentOpacity;
}

console.log(currentOpacity);

function bgRandom(event) {
  for (i = 0; i < 100; i++) {
    let color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
    bgColor = color[Math.floor(Math.random() * color.length)];
  }
  let change = event.target;
  change.style.backgroundColor = bgColor;
}

function createGrid() {
  let createColumns = userChoiceColumns();
  let createRows = userChoiceRows();
  if (createColumns < 0 || createColumns > 100) {
    alert("Not a number between 0 and 100");
    location.reload();
  }

  document.getElementById(
    "maingrid"
  ).style.gridTemplateColumns = `repeat(${createColumns}, 1fr)`;
  document.getElementById(
    "maingrid"
  ).style.gridTemplateRows = `repeat(${createRows}, 1fr)`;
  const grid = document.querySelector(".maingrid");
  grid.addEventListener("mousemove", bgRandom);

  for (let i = 0; i <= createColumns; i++) {
    for (let j = 0; j <= createRows; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
      cell.addEventListener("onmouseover", bgRandom);
      cell.addEventListener("onmouseout", darkening);
    }
  }
}
