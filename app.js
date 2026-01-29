let name = prompt("What is your name?");

if(name === null){
    name="Anonymous Wizard";
}else if (name.trim() === ""){
    name = "Nameless Wonder";
}else{
    name = name.trim();
}

const nameSpan = document.getElementById("studentName");
nameSpan.innerText = name;

let luckyInput = prompt("What is your lucky number? (0-100)");
let luckyNumber = parseInt(luckyInput);


function fixLucky(lucky) {
    let luckyOutput = "";
    if (isNaN(lucky)) {
        return "You don't have a lucky number.";
    } else {
        return lucky.toString();
    }
}

let luckyOutput = fixLucky(luckyNumber);


const luckyNumberSpan = document.getElementById("luckyNumber");
luckyNumberSpan.innerText = luckyOutput;
const facts = [name, luckyOutput]

const statusMessageSpan = document.getElementById("statusMessage");
statusMessageSpan.innerText = facts.toString();