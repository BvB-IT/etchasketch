document.getElementById(".choose button");
document.addEventListener("click", createGrid);

function userChoice() {
  let userSelection = prompt(
    "Give desired grid-size between 0 and 100 here",
    "gridSize"
  );
  userSelection = Number(userSelection);
  let gridSize = userSelection;
  return gridSize;
}

function createGrid() {
  let create = userChoice();
  if (create < 0 || create > 100) {
    alert("Not a number between 0 and 100");
    location.reload();
  }
  document.getElementById(
    "maingrid"
  ).style.gridTemplateColumns = `repeat(${create}, 1fr)`;
  document.getElementById(
    "maingrid"
  ).style.gridTemplateRows = `repeat(${create}, 1fr)`;
  const grid = document.querySelector(".maingrid");
  for (let i = 0; i <= create; i++) {
    for (let j = 0; j <= create; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}
