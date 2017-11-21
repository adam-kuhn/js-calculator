window.onload = function (){
//document.getElementById("calc-btns").addEventListener("click", display);
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
let answer = []

function display0(){
  document.getElementById("calc-screen").innerHTML = 0
  answer.push(0)

}

function display1(){
  document.getElementById("calc-screen").innerHTML = 1
  answer.push(1)
}

function display2(){
  document.getElementById("calc-screen").innerHTML = 2
  answer.push(2)
}

function display3(){
  document.getElementById("calc-screen").innerHTML = 3
  answer.push(3)
}

function displayPlus(){
  document.getElementById("calc-screen").innerHTML = "+"
  answer.push("+")
}

function displayMinus(){
  document.getElementById("calc-screen").innerHTML = "-"
  answer.push("-")
}

function displayAnswer(){
  document.getElementById("calc-screen").innerHTML = answer
}

function display(evt) {
  let select = 10;
  document.getElementById("calc-screen").innerHTML = select

}



  /*evt.target.getElementById(i+1 stringify)


  let display = "0"
for (i=0; i < digits.length; i++){
  display = i
}*/
