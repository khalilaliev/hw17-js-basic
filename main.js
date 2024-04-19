"use strict";

// Level 1 //

// ---------------------- //

const button = document.getElementById("button");
button.addEventListener("click", () => {
  console.log("Clicked!");
});

// ---------------------- //

button.addEventListener("contextmenu", () => {
  console.log("Called contextmenu!");
});

// ---------------------- //

button.addEventListener("dblclick", () => {
  console.log("Double click!");
});

// --------task-2-------- //

// document.addEventListener("keyup", (event) => {
//   alert(event.key);
// });

// --------task-3-------- //

// document.getElementById("btn").addEventListener("click", () => {
//   const input = document.getElementById("input").value;
//   document.getElementById("h1").innerText = input;
// });

function getValue() {
  const button = document.getElementById("btn");
  button.addEventListener("click", () => {
    const input = document.getElementById("input");
    const valueOfInput = input.value;
    const h1 = document.getElementById("h1");
    h1.innerText = valueOfInput;
  });
}
getValue();

// Level 2 //

const firstInput = document.getElementById("value1");
const secondInput = document.getElementById("value2");
const result = document.getElementById("result");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const equal = document.getElementById("equal");

let action = "";

add.addEventListener("click", () => {
  action = "+";
});
sub.addEventListener("click", () => {
  action = "-";
});
multiply.addEventListener("click", () => {
  action = "*";
});
division.addEventListener("click", () => {
  action = "/";
});

function getOperation(input1, input2, operator) {
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);

  if (operator === "+") {
    return value1 + value2;
  } else if (operator === "-") {
    return value1 - value2;
  } else if (operator === "*") {
    return value1 * value2;
  } else if (operator === "/") {
    return value1 / value2;
  }
}
equal.addEventListener("click", () => {
  const getOperationResult = getOperation(firstInput, secondInput, action);
  result.textContent = getOperationResult;
});

// --------task-2-------- //

const count = document.getElementById("count");
const game = document.getElementById("game");
const rect = document.getElementById("rect");
const rectLeftEdge = rect.offsetLeft;
const rectRightEdge = rectLeftEdge + rect.offsetWidth - 2;
let value = 0;
let coordinateY = 0;
let isGameStarted = false;
let isGameFinished = false;

function simpleGame() {
  game.addEventListener("input", () => {
    value = +game.value;
    count.innerText = value;
  });
  rect.addEventListener("mousemove", startGame);
}

function startGame(event) {
  const x = event.clientX;
  const y = event.clientY;
  if (!isGameFinished) {
    if (x === rectLeftEdge) {
      isGameStarted = true;
    }
    if (isGameStarted) {
      event.target.innerHTML = `X: ${x} Y: ${y}`;
      if (y < coordinateY || y > coordinateY) {
        value -= 1;
      }
      count.innerText = value;
      coordinateY = y;
      if (value <= 0) {
        alert("Lose!");
        isGameFinished = true;
      } else if (x >= rectRightEdge) {
        alert("You win!");
        isGameFinished = true;
      }
    }
  }
}

simpleGame();

// --------task-3-------- //

const inputColor = document.querySelector("#inputColor");
const btnContainer = document.querySelector("#btnContainer");
const createButton = document.querySelector("#create");

function createButtonColor() {
  createButton.addEventListener("click", () => {
    const button = document.createElement("button");
    const color = inputColor.value;
    button.innerHTML = color;
    button.addEventListener("click", () => {
      document.body.style.backgroundColor = color;
    });
    btnContainer.appendChild(button);
  });
}

createButtonColor();
