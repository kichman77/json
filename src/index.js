import css from "./style.css";
const body = document.querySelector("body");
const form = document.querySelector(".form");
const input = document.querySelector('[name="userName"]');
const textarea = document.querySelector('[name="message"]');
console.log(form, input, textarea);

const obj = {
  x: 17,
  y: 34,
  z: 58,
};
console.log(obj);
// console.log(Object);
// console.log(JSON);

let a = JSON.stringify(obj);
console.log(a);

let b = JSON.parse(a);
console.log(b);

// -------------------------------------------
// LocalStorage

console.log(localStorage);

localStorage.setItem("key", "item");
localStorage.setItem("neObj", "aMassiv");
localStorage.setItem("Bob", "Marly");
localStorage.setItem("car", "bmw");
localStorage.setItem("apple", "android");
localStorage.setItem("cat", "neDog");
localStorage.setItem("x", "y");

localStorage.removeItem("apple");

if (localStorage.getItem("apple")) {
  body.style.backgroundColor = "red";
}

// localStorage.clear()

localStorage.key("");

form.addEventListener("change", (event) => {
  console.log(event.target.value);
  console.log(event.target.name);

  const value = event.target.value;
  const key = event.target.name;

  localStorage.setItem(key, value)

});
input.value = localStorage.getItem('userName')
textarea.value = localStorage.getItem('message')
