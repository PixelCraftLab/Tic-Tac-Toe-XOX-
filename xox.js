const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;



const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];





function checkWin() {
  return winPatterns.some(pattern => {
    return pattern.every(index => {
      return cells[index].innerText === currentPlayer;
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.innerText !== "");
}

resetBtn.addEventListener("click", () => {
  cells.forEach(cell => cell.innerText = "");
  currentPlayer = "X";
  gameActive = true;
});




cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "" || !gameActive) return;

    cell.innerText = currentPlayer;

    if (checkWin()) {
      alert(currentPlayer + " wins!");
      gameActive = false;
      return;
    }

    if (checkDraw()) {
      alert("It's a draw!");
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});
