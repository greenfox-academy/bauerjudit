"use strict";

var candyCount = 0;
var lollypopCount = 0;
var buyCandyButton = document.querySelector(".BuyCandie");
var buyLollypopButton = document.querySelector(".BuyLollypop");
var candieCounter = document.querySelector(".CandieCounter");
var lollypopCounter = document.querySelector(".LollypopCounter");
var candiePersec = document.querySelector(".CandieSpeed");
var candySpeed = 0;

setInterval(isDisable, 50);

function isDisable () {
  if (candyCount < 10) {
    buyLollypopButton.setAttribute("disabled", "disabled");
  } else {
    buyLollypopButton.removeAttribute("disabled");
  }
}

function buyCandies () {
  candyCount++;
  updateCandy();
}

function buyLollypop () {
  if (candyCount >= 10) {
    lollypopCount++;
    candyCount -= 10;
    addCandiesBySpeed();
    updateAll();
    autoCandieSpeed();
  } else {
    updateLollypop;
  }
}

function updateAll () {
  updateLollypop();
  updateCandy();
  updateCandiepersec();
}

function autoCandieSpeed() {
  setInterval(changeCandiesBySpeed, 1000);
}

function addCandiesBySpeed () {
  candySpeed = Math.floor(lollypopCount / 10);
}

function updateCandiepersec () {
  candiePersec.innerHTML = "Candy/Second = " + candySpeed;
}

function updateCandy () {
  candieCounter.innerHTML = "You have " + candyCount + " candies!";
}

function updateLollypop () {
  lollypopCounter.innerHTML = "You have " + lollypopCount + " lollypops!";
}

function changeCandiesBySpeed() {
  if (lollypopCount >= 10) {
  candyCount += candySpeed;
  updateCandy();
  }
}

buyCandyButton.addEventListener("click", buyCandies);
buyLollypopButton.addEventListener("click", buyLollypop);
