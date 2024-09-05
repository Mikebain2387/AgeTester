//take input value subtract from todays date
//if sum is less than 18 "get out"
//if sum is equal to 18 or more "welcome"
//click submit button to calculate, clear the input, and prompt message

let birthday = document.getElementById("bday");
let calculate = document.getElementById("mathButton");

const date = new Date();
console.log(date);

calculate.addEventListener("click", calculateAge)

function calculateAge(){
 if(birthday.input !== ""){
 const sum = date - birthday.input;

}
console.log(sum);

}