let counterDisplayElem = document.querySelector(".numero-turno");
let counterMinusElem = document.getElementById(".indietro");
let counterResetElem = document.getElementById(".rest");
let counterPlusElem = document.getElementById("avanti");

let contatore=0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
 contatore=contatore+1;
 updateDisplay();
});


counterResetElem.addEventListener("click",()=>{
    contatore=0;
    updateDisplay();
  });


counterMinusElem.addEventListener("click",()=>{
  contatore=contatore-1;
  updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML=contatore;
};

