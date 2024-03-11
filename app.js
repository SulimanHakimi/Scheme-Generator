let generateBtn = document.querySelector(".generateBtn");
let colorPlace = document.querySelectorAll(".colors");
let colorName = document.querySelectorAll(".colorName");
let colorNameList = document.querySelector(".colorNameList");
let animate = document.querySelectorAll(".animate");
let colorInp = document.getElementById("colorInp");
generateBtn.addEventListener("click", () => {
  let color = colorInp.value.slice(1, 7);
  colorGenerator(color);
});

function colorGenerator(color) {
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&format=json`)
    .then((response) => response.json())
    .then((data) => {
      data.colors.map((color, index) => {
        colorPlace[index].style.background = color.hex.value;
        colorName[index].textContent = color.hex.value;
        colorPlace[index].classList.remove("animate");
      });
    });
}
