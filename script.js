const calcScreen=document.querySelector(".calculator-screen");
const updateScreen=(number)=>{
    calcScreen.value=number;
};
let prevNum='';
let calcOpr='';
let currNum='0';

const inputNum=(number)=>{
   if(currNum==='0'){
       currNum=number;
   }else{
       currNum+=number;
   }
}
const numbers=document.querySelectorAll(".number");
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNum(event.target.value);
        updateScreen(currNum);
    });    
});

const inputOpr=(oprator)=>{
    if(calcOpr===''){
        prevNum=currNum;
    }
    calcOpr=oprator;
    currNum='0';
 }
const oprators=document.querySelectorAll(".oprator");
oprators.forEach((oprator)=>{
    oprator.addEventListener("click",(event)=>{
        inputOpr(event.target.value);
    });    
});

const calculate=()=>{
    let result='';
    switch(calcOpr){
        case "+":
            result=parseFloat(prevNum)+parseFloat(currNum);
        break
        case "-":
            result=prevNum-currNum;
        break
        case "*":
            result=prevNum*currNum;
        break
        case "/":
            result=prevNum/currNum;
        break
        default:
        break
    }
    currNum=result;
    calcOpr=''
};

const equalSign=document.querySelector(".equal-sign");
equalSign.addEventListener('click',()=>{
    calculate()
    updateScreen(currNum)
});

const clearAll = ()=>{
    prevNum='';
    calcOpr='';
    currNum='0';
}
const cleanBtn=document.querySelector(".all-clear");
cleanBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currNum)
});

inputDecinal = (dot)=>{
    if(currNum.includes('.')){
        return
    }
    currNum+=dot;
};
const decimal=document.querySelector(".decimal");
decimal.addEventListener('click',(event)=>{
    inputDecinal(event.target.value)
    updateScreen(currNum)
});