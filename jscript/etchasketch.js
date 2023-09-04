let userSelection;
let gridSize;

function userChoice(gridSize) {
  userSelection = prompt("Give desired grid-size here", "gridSize");
  userSelection = gridSize;
  return gridSize;
}

userChoice();

const grid = document.querySelector(".maingrid");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
}

// function createDivElement(text) {
//   const div = document.createElement("div");

//   if (text) div.innerText = text;

//   return div;
// }

// function createSquare() {
//   const squareText = createDivElement(["col-1"], "This is a Square");
//   const row = createDivElement(["row"]);
//   row.appendChild(squareText);

//   const squareBody = createDivElement(["square-body"]);
//   squareBody.appendChild(row);

//   //   const square = new DocumentFragment();
//   //   return square;
// }

// const fragment = new DocumentFragment();

// for (let i = 0; i < 16; i++) {
//   const el = createSquare();
//   fragment.appendChild(el);
// }

// document.querySelector("#maingrid").appendChild(fragment);

// maingrid.style.display = "grid";
// maingrid.style.gridTemplateColumns = "auto auto aut auto auto auto auto auto";
// maingrid.style.gridTemplateRows = "auto auto auto auto auto auto auto auto";
// https://stackoverflow.com/questions/60697428/creating-multiple-elements-with-javascript
