console.log("EtchASketch Started...")

const container = document.querySelector(".container");
let gridSize = 16;

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGrid() {
  for (let j = 0; j <= gridSize; j++) {
    let row = document.createElement('div');
    row.classList.add("row");
    for (let i = 0; i <= gridSize; i++) {
      let cell = document.createElement('div');
      cell.classList.add("cell");
      cell.addEventListener("mouseover", function (){
        cell.style.backgroundColor = "black";
      });
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

function changeGridSize() {
  gridSize = parseInt(prompt("Enter grid size: "));
  if (gridSize <= 64) {
    removeAllChildNodes(container);
    createGrid();
  } else {
    alert("Please choose a grid size up to 64.");
    changeGridSize();
  }

}

createGrid();







