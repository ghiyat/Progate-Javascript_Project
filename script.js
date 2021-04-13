const calcScreen=document.querySelector(".calculator-screen");
const updateScreen=(number)=>{
    calcScreen.value=number;
};
const numbers=document.querySelectorAll(".number");
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        updateScreen(event.target.value);
    });    
});

