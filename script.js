console.log('calculator');

let btns = document.querySelectorAll("button");
let screen = document.getElementById("answer");

let screenValue = "";
let buttonText;
for(item of btns){
    item.addEventListener('click',(e)=>{
        
        buttonText = e.target.innerText;
        
         if(buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        } else if(buttonText == "="){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        } 
        else{
            screenValue = screenValue + e.target.innerHTML;
            screen.value = screenValue
        }
        console.log('click',e.target.innerText);
    })
}
