/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("sendForm").addEventListener("click", function(e) {
    e.preventDefault();
    const cardNumber = document.querySelector("#cardNumber");
    const cVC = document.querySelector("#CVC");
    const amount = document.getElementById("amount");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const pCode = document.getElementById("pCode");
  });
};
