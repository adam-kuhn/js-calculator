
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

//add a function where equation.length is TOO big --> respone with OK smarty


//functions to display numbers/operators and push to the equation array, which will be used to perform the calculation
function display(){
  document.getElementById("calc-equation").innerHTML = equation.join("")
  if (equation.length > 10){
    return document.getElementById("calc-equation").innerHTML = "That's a lot of numbers. Let's not get carried away now."
  }
}
function display0(){
  document.getElementById("calc-screen").innerHTML = 0
  equation.push(0)
  display()

}
function display1(){
  document.getElementById("calc-screen").innerHTML = 1
  equation.push(1)
  //document.getElementById("calc-equation").innerHTML = equation.join("")
  display()
}

function display2(){
  document.getElementById("calc-screen").innerHTML = 2
  equation.push(2)
  display()
}

function display3(){
  document.getElementById("calc-screen").innerHTML = 3
  equation.push(3)
  display()
}

function displayPlus(){
  document.getElementById("calc-screen").innerHTML = "+"
  equation.push("+")
  display()
}

function displayMinus(){
  document.getElementById("calc-screen").innerHTML = "-"
  equation.push("-")
  display()
}

function displayAnswer(){
  //this will call on a variable "answer" that I will define below to be the result of the equation
  display()
  getEquation()
}

//operator will always be at an odd placement, 1,3,5...
function getEquation(){
  //split the numbers out
let operation = equation.join("");
let numbers =  operation.split(/\D/g)
let operator = []

console.log(operation)
  console.log("numbers " + numbers)
//split the operators
getOperators = operation.split(/\d/g)
for (j=0; j < getOperators.length; j++){
  if (getOperators[j] == "+" || getOperators[j] == "-" ){
    operator.push(getOperators[j])
  }


}

    console.log("operators " + operator)
    console.log("length " + operator.length)



  function calculate(){
    let answer = 0;
    for (i=0; i<operator.length; i++){
      if (operation.length[i] == "+"){
        answer = 2

      }
    }
  }
}

function calculate(){


}
