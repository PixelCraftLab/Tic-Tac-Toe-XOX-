const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset");

let txt = document.getElementById("txt");



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



let result = document.getElementById("result")

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "" || !gameActive) return;

    cell.innerText = currentPlayer;

    if (checkWin()) {
      
      gameActive = false;
      result.innerText=`${currentPlayer} wins`
      result.style.backgroundColor = "black";
      result.style.backgroundColor = "black";
      result.style.padding = "10px";
      result.style.width = "60px";
      result.style.borderRadius = "10px";
      // alert(currentPlayer + " wins!");
      return;
    }

    if (checkDraw()) {
      
      gameActive = false;
      result.innerText=`It is a draw`
      result.style.backgroundColor = "black";
      result.style.backgroundColor = "black";
      result.style.padding = "10px";
      result.style.width = "30%";
      result.style.borderRadius = "10px";
      
      // alert("It's a draw!");
      return;
    }

    if (checkWin()) {
      txt.innerText = currentPlayer + " wins!";
    } else if (checkDraw()) {
      txt.innerText = "It's a draw!";
    } else {
      txt.innerText = "Current Player: " + currentPlayer;
    }

    if (checkWin()) {
      txt.innerText = currentPlayer + " wins!";
    } else if (checkDraw()) {
      txt.innerText = "It's a draw!";
    } 
      
    

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    
  });
});


