"use strict";

const slider = document.querySelector(".header__checkbox");
const price = document.querySelectorAll(".plan__price");
const monthly = document.querySelectorAll(".plan__price--monthly");
const annual = document.querySelectorAll(".plan__price--annual");

console.log(annual);

slider.addEventListener("click", function () {
  monthly.classList.toggle("hidden");
  annual.classList.toggle("hidden");
});

console.log(slider.checked);
