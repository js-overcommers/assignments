const boxes = document.querySelectorAll(".three_columns__colors");
const checkbox = document.querySelector("#check");
const btn = document.querySelector("#submitBtn");
const colorsDiv = document.querySelector(".colors");
let mainColor = document.querySelector("#hex_code");
let form = document.querySelector("form");

const codes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
let colors = [];
let value1, value2, value3, value4, value5, value6;

for (let i = 0; i < 9; i++) {
  value1 = codes[Math.floor(Math.random(codes) * codes.length)];
  value2 = codes[Math.floor(Math.random(codes) * codes.length)];
  value3 = codes[Math.floor(Math.random(codes) * codes.length)];
  value4 = codes[Math.floor(Math.random(codes) * codes.length)];
  value5 = codes[Math.floor(Math.random(codes) * codes.length)];
  value6 = codes[Math.floor(Math.random(codes) * codes.length)];
  colors.push(`#${value1}${value2}${value3}${value4}${value5}${value6}`);
}

mainColor.textContent = colors[Math.floor(Math.random(colors) * colors.length)];

for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = colors[i];
  boxes[i].textContent = colors[i];
}

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.textContent == mainColor.textContent) {
      console.log(e.target.textContent, mainColor.textContent);
      checkbox.removeAttribute("disabled");
      checkbox.setAttribute("checked", true);
      btn.removeAttribute("disabled");
    } else {
      console.log("You are a Robot!");
      alert("You are a Robot!");
      location.reload();
    }
  });
});

form.addEventListener("submit", (e) => {
  alert("You are a super Human");
  alert("Form was submitted");
});
