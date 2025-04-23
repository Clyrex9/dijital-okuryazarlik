// script.js

let score = 0;

function earnPoint() {
  score += 1;
  document.getElementById("score").innerText = "Puan: " + score;
}

function scrollToModules() {
  document.getElementById("modules").scrollIntoView({ behavior: 'smooth' });
}
