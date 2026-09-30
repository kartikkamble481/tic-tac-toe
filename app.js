let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector(".reset");

let newGamebtn = document.querySelector("newbtn");

let smgcotainer = document.querySelector(".smg-container");

let smg = document.querySelector("#smg");

let turnO = true; // player X , player O

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

const showWiner = (winner) => {
  smg.innerText = ` congratulations , winner is ${winner} `;
  smgcotainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWiner(pos1val);
      }
    }
  }
};
