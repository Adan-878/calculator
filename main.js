console.log("Welcome to my calculator");

let s = document.getElementById("screen");

function add(x) {
  if (s.innerText == "0") {
    s.innerText = x;
  };
  else s.innerText += x;
}

function clearScreen() {
  s.innerText = "0";
}

function calc() {
  s.innerText = eval(s.innerText);
}
