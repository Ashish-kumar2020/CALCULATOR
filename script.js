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
            // screenValue = eval(screenValue);
            // screen.value = screenValue;
            checkForBracketMulti();
        } 
        else{
            screenValue = screenValue + e.target.innerHTML;
            screen.value = screenValue
        }
        console.log('click',e.target.innerText);
    })

}

document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.shiftKey == 57) {
        event.key = "(";
    } else if (event.shiftKey == 48) {
        event.key = ")";
    } else if (event.shiftKey == 53) {
        event.key = "%";
    }
    if (event.keyCode == 88) {
        screenValue += "*";
        screen.value = screenValue;
    }
    if (
        event.key <= 9 ||
        event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "." ||
        event.key == "/" ||
        event.key == "%" ||
        event.key == "(" ||
        event.key == ")"
    ) {
        screenValue += event.key;
        screen.value = screenValue;
    }
    if (event.keyCode == 13 || event.keyCode == 187) {
        checkForBracketMulti(); // automatically evaluates if no brackets
    } else if (event.keyCode == 46) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    } else if (event.keyCode == 8) {
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    } else if (event.keyCode == 67) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    } else if (event.keyCode == 82) {
        location.reload();
    }
});


window.onerror = function () {
    alert("PLEASE INPUT VALID EXPRESSION");
    screenValue = "";
    screen.value = screenValue;
    console.clear();
};

window.onBracketMultiplication = function () {
    screenValue = addStr(screen.value, screen.value.indexOf("("), "*");
    screen.value = eval(screenValue);
};

function addStr(str, index, stringToAdd) {
    return (
        str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
}

function checkForBracketMulti() {
    // Check if there's a number directly infront of a bracket
    if (
        screen.value.includes("(") &&
        !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))
    ) {
        window.onBracketMultiplication();
        return;
    } else {
        screen.value = eval(screenValue);
    }
}