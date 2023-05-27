
  let counterDisplayElem = document.querySelector(".numero-turno");
  let counterMinusElem = document.querySelector(".indietro");
  let counterResetElem = document.querySelector(".reset");
  let counterPlusElem = document.querySelector(".avanti");

  let contatore = 1;

  updateDisplay();

  counterPlusElem.addEventListener("click", () => {
    contatore = contatore + 1;
    updateDisplay();
  });

  counterResetElem.addEventListener("click", () => {
    contatore = 0;
    updateDisplay();
  });

  counterMinusElem.addEventListener("click", () => {
    if (contatore > 1) {
      contatore = contatore - 1;
    }
    updateDisplay();
  });

  function updateDisplay() {
    counterDisplayElem.textContent = contatore.toString().padStart(2, "0");
  }



