// Your code here
let  dodger = document.querySelector('#dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseFloat(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
var leftNumbers = dodger.style.left.replace('px', '');
var left = parseFloat(leftNumbers, 10)
if (left < 360) {
  dodger.style.left = `${left + 1}px`
}
}

document.addEventListener('keydown', (e)=>{
if (e.key === "ArrowLeft") {
  moveDodgerLeft()
}
})

document.addEventListener('keydown', (e)=>{
if (e.key === "ArrowRight") {
  moveDodgerRight()
}
})