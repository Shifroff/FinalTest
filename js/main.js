const form = document.querySelector(".form__authorization ");
const listForm = form.querySelectorAll(".form__auth");
const userPassFirst = document.querySelector("#password1");
const userPassSecond = document.querySelector("#password2");
let flagPas = false;
let flagEmptyPole = false;

const listener = (e) => {
  userPassFirst.style =
    userPassFirst.value === userPassSecond.value
      ? "border: 1px solid green"
      : "border: 1px solid red";
  userPassSecond.style =
    userPassFirst.value === userPassSecond.value
      ? "border: 1px solid green"
      : "border: 1px solid red";
  flagPas = userPassFirst.value === userPassSecond.value ? true : false;
};
userPassSecond.addEventListener("input", listener);

form.addEventListener("submit", (e) => {
  listForm.forEach((element) => {
    if (!element.value) {
      element.style = "border: 1px solid red";
      flagEmptyPole = false;
    }
  });
  if (!flagPas || !flagEmptyPole) {
    e.preventDefault();
    alert(`поля незаполнены или некорректный пароль`);
  }
});

form.querySelector(".form__auth").addEventListener("click", (e) => {
  e.target.style = "border: 1px solid #d9d9d9";
  flagEmptyPole = true;
});

document.querySelector(".rating-area ").addEventListener("click", (e) => {
  if (e.target.type === "radio") {
    console.log(e.target.id);
  }
});
