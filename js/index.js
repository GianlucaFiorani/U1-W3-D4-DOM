const tabellone = [];
const tombola = document.getElementById("tombola");
const numGenration = document.createElement("button");
const estractionDiv = document.getElementById("estration");
numGenration.innerText = "ESTRAI";
estractionDiv.appendChild(numGenration);

const tombolaGeneration = function () {
  for (let i = 0; i < 99; i++) {
    tabellone.push(i + 1);
    const box = document.createElement("div");
    box.classList.add("casella");
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    box.appendChild(h3);
    tombola.appendChild(box);
  }
};

numGenration.onclick = function (e) {
  e.preventDefault();
  const allBox = document.querySelectorAll(".casella");
  const randNum = Math.floor(Math.random() * (tabellone.length - 1));
  const confNum = tabellone[randNum];
  tabellone.splice(randNum, 1);
  allBox.forEach((num) => {
    const boxNum = parseInt(num.innerText);
    if (boxNum === confNum) {
      num.classList.add("selected");
    }
  });
};

window.addEventListener("DOMContentLoaded", function () {
  tombolaGeneration();
});
