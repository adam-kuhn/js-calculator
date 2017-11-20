window.onload = function (){
document.getElementById("calc-btns").addEventListener("click", change);
}

function change(evt) {
  evt.target.classList.add('button-blue');

}
