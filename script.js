"use strict";

const slider = document.querySelector(".header__checkbox");
const price = document.querySelectorAll(".plan__price");
const monthly = document.querySelectorAll(".plan__price--monthly");
const annual = document.querySelectorAll(".plan__price--annual");

slider.addEventListener("change", function () {
  togglePrices(monthly);
  togglePrices(annual);
});

function togglePrices(array) {
  array.forEach((item) => item.classList.toggle("hidden"));
}
