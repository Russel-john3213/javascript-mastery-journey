const num1 = document.querySelector("#textInput");
const num2 = document.querySelector("#textInput2");

const div = document.querySelector(".text");
const add = document.querySelector("#add");

add.addEventListener("click", () => {
  div.textContent = Number(num1.value) + Number(num2.value);
});
