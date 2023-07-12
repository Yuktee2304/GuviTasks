let sec = document.createElement("section");
document.body.append(sec);

let div = document.createElement("div");
div.setAttribute("class", "row");
div.setAttribute("id", "container");
sec.append(div);
let divcon = document.getElementById("container");

let heading1 = document.createElement("h1");
heading1.setAttribute("id", "title");
heading1.textContent = "DOM Calculator";
divcon.append(heading1);

let p = document.createElement("p");
p.setAttribute("id", "description");
p.textContent = "Using HTML, CSS and JS";
divcon.append(p);

let sec1 = document.createElement("section");
sec1.setAttribute("class", "container");
document.body.append(sec1);

let section1 = document.querySelector(".container");
section1.classList.add("row");
section1.classList.add("calculator");

let div1 = document.createElement("div");
div1.setAttribute("class", "display");
section1.append(div1);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "result");
input.setAttribute("class", "calc_output");
input.setAttribute("value", "0");
input.setAttribute("disabled", "");
div1.append(input);

let div3 = document.createElement("div");
div3.setAttribute("class", "all_buttons");
section1.append(div3);

let btndiv = function (div) {
  let div4 = document.createElement("div");
  div4.setAttribute(
    "class",
    `btngroup ${div} row d-flex justify-content-evenly`
  );
  div3.append(div4);
};
btndiv("db1");
let db1 = document.querySelector(".db1");

let btninsideDiv = function (div, value, id, data, class1, text) {
  let btn1 = document.createElement("button");
  btn1.setAttribute("value", `${value}`);
  btn1.setAttribute("id", `${id}`);
  btn1.setAttribute("data-type", `${data}`);
  btn1.setAttribute("class", `${class1}`);
  btn1.textContent = `${text}`;
  div.append(btn1);
};

btninsideDiv(db1, "clear", "clear", "clear", "col-3 btn btn-secondary", "AC");
btninsideDiv(db1, "delete", "del", "op", "col-3 btn btn-secondary", "Del");
btninsideDiv(db1, "%", "modulus", "op", "col-3 btn btn-secondary", "%");
btninsideDiv(db1, "/", "division", "op", "col-3 btn btn-warning", "÷");

btndiv("db2");
let db2 = document.querySelector(".db2");
btninsideDiv(db2, "7", "7", "num", "col-3 btn btn-dark", "7");
btninsideDiv(db2, "8", "8", "num", "col-3 btn btn-dark", "8");
btninsideDiv(db2, "9", "9", "num", "col-3 btn btn-dark", "9");
btninsideDiv(db2, "*", "multiply", "op", "col-3 btn btn-warning", "x");

btndiv("db3");
let db3 = document.querySelector(".db3");
btninsideDiv(db3, "4", "4", "num", "col-3 btn btn-dark", "4");
btninsideDiv(db3, "5", "5", "num", "col-3 btn btn-dark", "5");
btninsideDiv(db3, "6", "6", "num", "col-3 btn btn-dark", "6");
btninsideDiv(db3, "-", "subtract", "op", "col-3 btn btn-warning", "-");

btndiv("db4");
let db4 = document.querySelector(".db4");
btninsideDiv(db4, "1", "1", "num", "col-3 btn btn-dark", "1");
btninsideDiv(db4, "2", "2", "num", "col-3 btn btn-dark", "2");
btninsideDiv(db4, "3", "3", "num", "col-3 btn btn-dark", "3");
btninsideDiv(db4, "+", "add", "op", "col-3 btn btn-warning", "+");

btndiv("db5"); //div, value, id, data, class1, text
let db5 = document.querySelector(".db5");
btninsideDiv(db5, "0", "0", "num", "col-3 btn btn-dark", "0");
btninsideDiv(db5, "00", "00", "num", "col-3 btn btn-dark", "00");
btninsideDiv(db5, ".", "dot", "num", "col-3 btn btn-dark", ".");
btninsideDiv(db5, "=", "equal", "op", "col-3 btn btn-warning", "=");

let output = document.getElementById("result");
let allbutton = document.getElementById("allbuttons");

let clear = document.getElementById("clear");
let delete1 = document.getElementById("delete");
let modulus = document.getElementById("modulus");
let division = document.getElementById("division");

let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let multiply = document.getElementById("multiply");

let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let sub = document.getElementById("subtract");

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let add = document.getElementById("add");

let zero = document.getElementById("0");
let dzero = document.getElementById("00");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");

let numbers = document.querySelectorAll("button[data-type=num]");
let operators = document.querySelectorAll("button[data-type=op]");

let is_operator = false;
let equation = [];

function number1(e) {
  if (output.value == "0" || output.value == "00") {
    output.value = e.value;
  } else if (is_operator) {
    is_operator = false;
    output.value = e.value;
  } else if (output.value.includes(".")) {
    output.value = output.value + "" + e.value.replace(".", "");
  } else {
    output.value = output.value + "" + e.value;
  }
}
numbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    number1(e.target);
  });
});

clear.addEventListener("click", function () {
  equation = [];
  output.value = 0;
});

function operator1(e) {
  switch (e.value) {
    case "%":
      output.value = parseFloat(output.value) / 100;
      break;
    case "delete":
      if (output.value !== 0) {
        output.value = output.value.toString().slice(0, -1);
      }
      break;
    case "=":
      equation.push(output.value);
      let equalAns = equation.join("").replace(/[^-()\d/*+.]/g, "");
      output.value = eval(equalAns);
      equation = [];

      break;
    default:
      let last_item = equation[equation.length - 1];
      if (["/", "*", "+", "-"].includes(last_item) && is_operator) {
        equation.pop();
        equation.push(e.value);
      } else {
        equation.push(output.value);
        equation.push(e.value);
      }
      is_operator = true;
      break;
  }
}
operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    operator1(e.target);
  });
});

window.addEventListener("keydown", function (e) {
  console.log(e.key);
  switch (e.key) {
    case "1":
      number1(one);
      break;
    case "2":
      number1(two);
      break;
    case "3":
      number1(three);
      break;
    case "4":
      number1(four);
      break;
    case "5":
      number1(five);
      break;
    case "6":
      number1(six);
      break;
    case "7":
      number1(seven);
      break;
    case "8":
      number1(eight);
      break;
    case "9":
      number1(nine);
      break;
    case "0":
      number1(zero);
      break;
    case "*":
      operator1(multiply);
      break;
    case "+":
      operator1(add);
      break;
    case "-":
      operator1(sub);
      break;
    case "/":
      operator1(division);
      break;
    case ".":
      operator1(dot);
      break;
    case "Enter":
      operator1(equal);
      break;
    case "Backspace":
      if (output.value !== 0) {
        output.value = output.value.toString().slice(0, -1);
      }
      break;
    default:
      this.alert("Enter only Numbers and Operators");
      break;
  }
});