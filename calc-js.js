window.onload = function (){

document.getElementById("0").addEventListener("click", display0);
document.getElementById("1").addEventListener("click", display1);
document.getElementById("2").addEventListener("click", display2);
document.getElementById("3").addEventListener("click", display3);
document.getElementById("plus").addEventListener("click", displayPlus);
document.getElementById("minus").addEventListener("click", displayMinus);
document.getElementById("equals").addEventListener("click", displayAnswer);


let digits = document.getElementsByClassName("nbr-btn")
let operator = document.getElementsByClassName("opr-btn")
}
let equation = []


//functions to display numbers/operators and push to the equation array, which will be used to perform the calculation
function display0(){
  document.getElementById("calc-screen").innerHTML = 0
  equation.push(0)
  document.getElementById("calc-equation").innerHTML = equation.join("")
}
function display1(){
  document.getElementById("calc-screen").innerHTML = 1
  equation.push(1)
  document.getElementById("calc-equation").innerHTML = equation.join("")
}

function display2(){
  document.getElementById("calc-screen").innerHTML = 2
  equation.push(2)
  document.getElementById("calc-equation").innerHTML = equation.join("")
}

function display3(){
  document.getElementById("calc-screen").innerHTML = 3
  equation.push(3)
  document.getElementById("calc-equation").innerHTML = equation.join("")
}

function displayPlus(){
  document.getElementById("calc-screen").innerHTML = "+"
  equation.push("+")
  document.getElementById("calc-equation").innerHTML = equation.join("")
}

function displayMinus(){
  document.getElementById("calc-screen").innerHTML = "-"
  equation.push("-")
  document.getElementById("calc-equation").innerHTML = equation.join("")
}

function displayAnswer(){
  //this will call on a variable "answer" that I will define below to be the result of the equation
  document.getElementById("calc-screen").innerHTML = equation.join("")
  numbers()
}


function getNumbers(){
let operation = equation.join("");
let numbers =  operation.split(/\D/g)
  console.log(numbers)



}
