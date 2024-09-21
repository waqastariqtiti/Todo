var butta = document.querySelector(".buttonson");
var perent = document.querySelector(".simpleResult");

var inpu = null;
var Active = false;

function butt() {
  Active = !Active;

  if (Active) {
    butta.setAttribute("id", "green");
    butta.innerHTML = "on";

    if (!inpu) {
      inpu = document.createElement("input");
      inpu.setAttribute("class", "resultInput");
      inpu.setAttribute("type", "text");
      inpu.setAttribute("placeholder", "0");
      perent.appendChild(inpu);
    }
  } else {
    butta.setAttribute("id", "red");
    butta.innerHTML = "off";
    perent.removeChild(inpu);
    inpu = null;
  }
}

function handleButtonInput(value) {
  if (!Active || !inpu) return;

  if (inpu.value === "Error") {
    inpu.value = value;
  } else {
    inpu.value += value;
  }
}

function butt1() {
  handleButtonInput("1");
}
function butt2() {
  handleButtonInput("2");
}
function butt3() {
  handleButtonInput("3");
}
function butt4() {
  handleButtonInput("4");
}
function butt5() {
  handleButtonInput("5");
}
function butt6() {
  handleButtonInput("6");
}
function butt7() {
  handleButtonInput("7");
}
function butt8() {
  handleButtonInput("8");
}
function butt9() {
  handleButtonInput("9");
}
function butt0() {
  if (!Active || !inpu) return;

  if (inpu.value === "Error") {
    inpu.value = "";
  } else if (inpu.value === "") {
    inpu.value = "0";
  } else if (inpu.value === "0") {
    inpu.value = "0";
  } else {
    inpu.value += "0";
  }
}

function handleOperatorInput(operator) {
  if (!Active || !inpu) return;

  if (inpu.value === "Error") {
    inpu.value = operator;
  } else {
    inpu.value += operator;
  }
}

function buttPlus() {
  handleOperatorInput("+");
}
function buttMinus() {
  handleOperatorInput("-");
}
function buttMulti() {
  handleOperatorInput("*");
}
function buttDivide() {
  handleOperatorInput("/");
}

function buttEqual() {
  if (!Active || !inpu) return;

  try {
    inpu.value = eval(inpu.value);
  } catch (error) {
    inpu.value = "Error";
  }
}

function buttAc() {
  if (!Active || !inpu) return;

  inpu.value = "";
}

