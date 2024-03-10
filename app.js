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

// function generateColor() {
//   for (let i = 0; i < colorPlace.length; i++) {
//     const randomColor = Math.floor(Math.random() * 124777).toString(16);
//     colorPlace[i].style.background = "#" + randomColor;
//     colorName[i].textContent = "#" + randomColor;
//     colorPlace[i].classList.remove("animate");
//   }
// }

function colorGenerator(color) {
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&format=json`)
    .then((response) => response.json())
    .then((data) => {
      data.colors.map((color) => {
        for (let i = 0; i < colorPlace.length; i++) {
          console.log(i);
          colorPlace[i].style.background = color.hex.value;
          colorName[i].textContent = color.hex.value;
          colorPlace[i].classList.remove("animate");
        }
      });

      console.log(data);
      // for (let scheme of data.colors) {
      //   console.log(`${scheme.name}: ${scheme.hex.value}`);
      // }
    });
}
