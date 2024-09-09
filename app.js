//take input value subtract from todays date
//if sum is less than 18 "get out"
//if sum is equal to 18 or more "welcome"
//click submit button to calculate, clear the input, and prompt message

let birthday = document.getElementById("bday");
let calculate = document.getElementById("mathButton");
let message = document.getElementById("message");
const year = new Date().getFullYear();




calculate.addEventListener("click", calculateAge)

function calculateAge(){
 if(birthday.value !== "" && birthday.value > 0){
  let bdayYear = birthday.value;
  let age = year - bdayYear;



if (age < 18){
 message.innerHTML = (`You are only ${age} years old, that is too young.  You can git out!!`);

} else if(age >= 18){
 message.innerHTML =(`Welcome, You are ${age} years old.  Time to Partyyyyy!!!`);

 
 const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 100);
 

}
clearInput()
}
else {
  message.innerHTML = ("Entry not valid, try using an acutal year, jeez")
  clearInput()
}

}

function clearInput(){
 birthday.value="";
}