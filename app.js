let name = prompt("What is your name?");
name.trim()

if(name==null){
    name="Anonymous Wizard";
}else if (name.trim() === ""){
    name = "Nameless Wonder";
}else{
    name = name.trim();
}
const nameSpan = document.getElementById("StudentName");
nameSpan.innerText = name;
let luckyInput = prompt("What is your lucky number? (0-100)");
let luckyNumber = parseInt(luckyInput);