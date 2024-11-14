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
    const postalCode = document.getElementById("pCode");

    const alertMessage = document.querySelector(".alert");
    alertMessage.style.display = "none";
    alertMessage.style.textContent = "";

    const inputs = [
      cardNumber,
      CVC,
      amount,
      firstName,
      lastName,
      city,
      state,
      postalCode
    ];
    for (const input of inputs) {
      input.style.backgroundColor = "";
    }
  });
};
