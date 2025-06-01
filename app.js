// Task No 1 
// Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

function ageBtn() {
  var userAge = prompt("what is your Age...???");
  if (userAge >= 18) {
    alert("You Are Adult.");
  } else {
    alert("You Are a Minor");
  }
}
// ----------------------------------------------------------


// Task No 2
// Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".

function randomNo() {
  var userNo = +prompt("enter Random No.....???");

  if (userNo % 2 === 0) {
    alert("Positive Number...");
  } else {
    alert("Nagative Number...");
  }
}

// ----------------------------------------------------------


// Task No 3
// Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".

function oddEven() {
  var Userinpt = +prompt("Input Random No for Checking (Odd / Even)");

  if (Userinpt % 2 === 0) {
    alert(Userinpt + " is Even number");
  } else {
    alert(Userinpt + " is Odd number");
  }
}

// -----------------------------------------------------------------------



// Task No 4
// Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

function adminBtn() {
  var userName = prompt("Input here admin", "admin");
  if (userName == "admin") {
    alert("Welcome, admin! \n" + "Ilham Kandhari");
  } else {
    alert("Access denied");
  }
}

// -----------------------------------------------------------------------




// Task No 5
// Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".

function twoNoBtn() {
  var num1 = prompt("input first Number...???");
  var num2 = prompt("input second Number...???");

  if (num1 === num2) {
    alert(`${num1} & ${num2} Both numbers are the same`);
  } else {
    alert("The numrs are diffeberent");
  }
}


// -----------------------------------------------------------------------


// Task No 6
// Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".

function bigSmallNo() {
  var firstNo = prompt("enter first No...???");
  var secondNo = prompt("enter Second No...???");

  if (firstNo > secondNo) {
    alert(firstNo + " First is Larger");
  }
  else {
    alert(secondNo + " First is Larger");
  }
}

// -----------------------------------------------------------------------


// Task No 7
// Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".

function randNoBtn() {
  var randNo = prompt("input Number between 0 to 100 ...??? ");

  if (randNo > 100) {
    alert(randNo + " Too Big");
  } else {
    alert(randNo + " with in Range...");
  }
}

// -----------------------------------------------------------------------


// Task No 8
// Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."

function stdScore() {
  var stdScore = prompt("enter your Score here...???");
  if (stdScore >= 50) {
    alert(`your Score is ${stdScore} \n You passed!`);
  } else {
    alert(`your Score is ${stdScore} \n You failed.`);
  }
}

// -----------------------------------------------------------------------


// Task No 9
// Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's
// not hot."

function temperature() {
  var temperature = prompt("enter Today Temperature here...???");
  if (temperature > 30) {
    alert(`Today Temperature is ${temperature} \n It's hot!`);
  } else {
    alert(`Today Temperature is ${temperature} \n It's not hot.`);
  }
}


// -----------------------------------------------------------------------


// Task No 10
// Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

function zeroBtn() {
  var zero = +prompt("enter Random No here...???");
  if (zero === 0) {
    alert(`Zero!`);
  } else {
    alert(`Not Zero!`);
  }
}

// -----------------------------------------------------------------------



// Task No 11
// Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."

function AgeOld() {

  var zero = +prompt("How old Are You...???");
  if (zero > 60) {
    alert(`You are a senior citizen.!`);
  } else {
    alert(`You are not a senior.`);
  }
}

// -----------------------------------------------------------------------

// Task No 12
// Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"

function ilhamBtn() {
  var ilham = prompt("what is your Good Name Plz...???", "Faiz Ilham");
  if (ilham == "Faiz Ilham") {
    alert(`Asalam o alikum ${ilham} have Good Day `);
  } else {
    alert(`ohh You're Not Faiz Ilham Sahab`);
  }
}

// -----------------------------------------------------------------------


// Task No 13
// Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".

function passBtn() {

  var pass = prompt("input your Password...???");
  if (pass === 12345) {
    alert(`${pass} Correct Password!`);
  } else {
    alert(`${pass} Wrong Password`);
  }
}

// -----------------------------------------------------------------------



// Task No 14
// Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"

function currentTime() {
  var currentTime = prompt("Time is it...???");
  if (currentTime < 12) {
    alert(`Time is ${currentTime} :00 AM \n Good Morning`);
  } else if (currentTime >= 12 && currentTime <= 24) {
    alert(`Time is ${currentTime} :00 AM \n Good Afternoon`);
  } else {
    alert(`This Time is not ${currentTime} :00 AM \n Presented in Time Formate`);
  }
}

// -----------------------------------------------------------------------


// Task No 15
// Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".

function userNo() {
  var EnterNo = prompt("Add Random Number...???");
  if (EnterNo % 5 === 0) {
    alert(`this ${EnterNo} Number is Divisible by 5`);
  } else {
    alert(`this ${EnterNo} Number is Not divisible by 5`);
  }
}

// -----------------------------------------------------------------------


// Task No 16
// Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"

function playGame() {
  var playGame = prompt("are you want play game with me ...???");
  if (playGame == "yes") {
    alert(`let's Play!`);
  } else if (playGame == "no") {
    alert(`Maybe next time`);
  }
  else {
    alert(`Only Enter here (yes / no)`);
  }
}

// -----------------------------------------------------------------------


// Task No 17
// Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"

function favColor() {
  var favColor = prompt("what is Favorite Color...???");
  if (favColor == "Blue") {
    alert(`${favColor} \n Cool Choice!`);
  } else {
    alert(`${favColor} \n Interesting color!`);
  }
}

// -----------------------------------------------------------------------


// Task No 18
// Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".

function Weekend() {
  var weekend = prompt("what is the Day of the week...???");
  if (weekend == "Sunday") {
    alert(` ${weekend} is Weekend!`);
  } else {
    alert(`${weekend} is Weekday!`);
  }
}

// -----------------------------------------------------------------------


// Task No 19
//  Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."

function Fruits() {
  var fruits = prompt("which  Fuits Do you wants...???");
  if (fruits == "Banana" || fruits == "Apple") {
    alert(`We have that! ${fruits} Fruits`);
  } else {
    alert(`Sorry, ${fruits} Fruits out of stock.`);
  }
}

// -----------------------------------------------------------------------


// Task No 20
//  Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."


function userType() {
  var UserType = prompt("Type here (Start) to Begin...???");
  if (UserType == "Start") {
    alert(`Game started!`);
  } else {
    alert(`Waiting for input...`);
  }
}

// -----------------------------------------------------------------------