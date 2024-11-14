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
      cVC,
      amount,
      firstName,
      lastName,
      city,
      state,
      postalCode
    ];
    for (const input of inputs) {
      input.style.backgroundColor = "";

      let campoValido = true;
      const error = [];

      if (cardNumber.value.length !== 16 || isNaN(cardNumber.value)) {
        error.push("La tarjeta debe de tener 16 digitos");
        cardNumber.style.backgroundColor = "red";
        campoValido = false;
      }

      if (
        (cVC.value.length !== 3 && cVC.value.length !== 4) ||
        isNaN(cVC.value)
      ) {
        error.push("CVC must be 3 or 4 digits.");
        cVC.style.backgroundColor = "red";
        campoValido = false;
      }
      if (isNaN(amount.value) || amount.value <= 0) {
        error.push("El importe debe de ser mayor a $0");
        amount.style.backgroundColor = "red";
        campoValido = false;
      }
      if (!firstName.value) {
        error.push("Complete su nmombre por favor");
        firstName.style.backgroundColor = "red";
        campoValido = false;
      }
      if (!lastName.value) {
        error.push("Complete su apellido por favor");
        lastName.style.backgroundColor = "red";
        campoValido = false;
      }
      if (!city.value) {
        error.push("Complete su ciudad por favor");
        city.style.backgroundColor = "red";
        campoValido = false;
      }
      if (state.value === "Pick a state") {
        error.push("Seleccione un estado por favor");
        state.style.backgroundColor = "red";
        campoValido = false;
      }
      if (postalCode.value.length !== 5 || isNaN(postalCode.value)) {
        error.push("Su codigo postal debe de ser de 5 dígitos, verifiquelo.");
        postalCode.style.backgroundColor = "red";
        campoValido = false;
      }
    }
  });
};
