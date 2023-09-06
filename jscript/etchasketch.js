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

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let Color = "rgb(" + x + "," + y + "," + z + ")";

  // document.body.style.background = Color;

  return Color;
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
  for (let i = 0; i <= createColumns; i++) {
    for (let j = 0; j <= createRows; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }

  let bgColor = randomColor();
  document.getElementsByClassName(".cell");
  document.style.bgColor = `${bgColor}`;
}
