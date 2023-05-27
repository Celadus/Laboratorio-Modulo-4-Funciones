
  let counterDisplayElem = (document.querySelector(".numero-turno")as HTMLInputElement);
  let counterMinusElem = (document.querySelector(".indietro")as HTMLInputElement);
  let counterResetElem = (document.querySelector(".reset")as HTMLInputElement);
  let counterPlusElem = (document.querySelector(".avanti")as HTMLInputElement);

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



