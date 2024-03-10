let generateBtn = document.querySelector(".generateBtn");
let colorPlace = document.querySelectorAll(".colors");
let colorName = document.querySelectorAll(".colorName");
let colorNameList = document.querySelector(".colorNameList");
let animate = document.querySelectorAll(".animate");
generateBtn.addEventListener("click", generateColor);

function generateColor() {
  for (let i = 0; i < colorPlace.length; i++) {
    const randomColor = Math.floor(Math.random() * 124777).toString(16);
    colorPlace[i].style.background = "#" + randomColor;
    colorName[i].textContent = "#" + randomColor;
    colorPlace[i].classList.remove("animate");
  }
}
