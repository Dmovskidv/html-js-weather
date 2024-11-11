import { getWeatherInfo } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => getWeatherInfo());

const $searchBtn = document.querySelector(".searchBtn");
const $searchInput = document.querySelector(".searchInput");
const $appTitle = document.querySelector("h1");

$searchBtn.addEventListener("click", () => {
  if ($searchInput.value) {
    getWeatherInfo($searchInput.value);
  }
});

$searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if ($searchInput.value) {
      getWeatherInfo($searchInput.value);
    }
  }
});

$appTitle.addEventListener("click", () => location.reload());
