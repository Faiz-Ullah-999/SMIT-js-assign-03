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


// Task No 21
// Age-Based Grade Check
// Check a student's marks and display:
// "Distinction" if marks ≥ 80
// "Pass" if marks ≥ 50 and < 80
// "Fail" if marks < 50
// "Invalid Marks" if marks are not between 0 and 100

function stdMarks() {
  var StdMarks = prompt('enter your marks here....???');
  if (StdMarks >= 80 && StdMarks <= 100) {
    alert(`Distinction \n your marks ${StdMarks}`);
  } else if (StdMarks >= 50 && StdMarks < 80) {
    alert(`PASS \n your marks ${StdMarks}`);
  } else if (StdMarks < 50) {
    alert(`FAILED \n your marks ${StdMarks}`);
  } else {
    alert(`${StdMarks} Invalid Marks \n marks must be between 0 to 100`);
  }
}

// -----------------------------------------------------------------------

// Task No 22
// Discount Eligibility Based on Age and Membership
// Given a person's age and membership status, show:
// "Senior Premium Discount" if age ≥ 60 and is a premium member
// "Senior Discount" if age ≥ 60
// "Premium Discount" if a premium member
// "No Discount" otherwise


function Disc_Membership() {
  var oldAge = prompt('enter your age here....???');
  var checkCard = confirm("are you (premium member)...???");
  if (oldAge >= 60 && checkCard == true) {
    alert('you Got \n Senior Premium Discount ' + "\n Accourding to your Age " + oldAge + "\n having premium member");
  } else if (oldAge >= 60) {
    alert(`Senior Discount \n Accourding to your Age ${oldAge}`);
  } else if (checkCard === true) {
    alert(`Premium Discount \n Due to your (premium Member)`);
  } else {
    alert(`No Discount`);
  }
}

// -----------------------------------------------------------------------



// Task No 23
// Login and Email Verification
// If user is logged in and email is verified → "Access granted"
// If user is logged in but not verified → "Please verify your email"
// If not logged in → "Please log in"


function varifyEmail() {
  var emailVarify = prompt("enter your Email Here...???", "admin123@gmail.com");
  var verified = confirm("is it varified your email or not...???");

  if (emailVarify === "admin123@gmail.com" && verified === true) {
    alert(`${emailVarify} \n Access granted!`);
  } else if (emailVarify === "admin123@gmail.com" && verified === false) {
    alert(`${emailVarify} \n Please verify your email!`);
  } else {
    alert(`Please log in!`);
  }
}

// -----------------------------------------------------------------------


// Task No 24
// Contest Eligibility
// Check if a person is eligible to enter a contest:
// ● Must be between ages 18–35
// ● Must be from Pakistan or India
// ● Must not be banned
// Display appropriate messages for age, region, or ban issues.

function contestEligible() {
  var contest = prompt("How old are You...???");
  var userCountry = prompt("where are you from...??? (pakistan / India)...???");
  var userStatus = confirm("are you Banned from the Contest...???");

  if ((contest >= 18 && contest <= 35) && (userCountry === "pakistan" || userCountry === "india") && userStatus === false) {
    alert(`You are eligible to enter the contest.`);
  } else if (!(userCountry === "pakistan" || userCountry === "india")) {
    alert(`plz select Correct Country Name \n this Country ${userCountry} is not Acceptable`);
  } else if (!(userStatus === true)) {
    alert(`You are not eligible because you are banned.`);
  } else {
    alert(`You are not eligible due to age.`);
  }
}

// -----------------------------------------------------------------------

// Task No 25
// Subscription Access Check
// Given the subscription plan and login status:
// ● "Welcome Premium User" if plan is "premium" and logged in
// ● "Welcome Free User" if plan is "free" and logged in
// ● "Please log in to continue" if not logged in
// ● "Invalid subscription" otherwise


function Subscription() {
  var Subscription = prompt('what is your plan...???', "Premium / Free");
  var userLogin = confirm("are you Login...???");

  if (Subscription === 'Premium' && userLogin === true) {
    alert(`Welcome Premium User`);
  } else if (Subscription === 'Free' && userLogin === false) {
    alert(`Please log in to continue`);
  } else {
    alert(`Invalid subscription`);
  }
}

// -----------------------------------------------------------------------

// Task No 26
// Product Purchase Validation
// Check product conditions:
// ● "Buy now with discount" if price > 1000, in stock, and user is a member
// ● "Buy now" if in stock
// ● "Out of stock" if stock === 0
// ● "Invalid product" otherwise



function productPurchase() {
  var prdPrice = +prompt('How much is this Product...???');
  prdStock = confirm("product is available in Stock...???");
  var isMember = confirm('Are You Member...???');

  if (prdPrice > 1000 && prdStock === true && isMember === true) {
    alert("Buy now with discount");
  } else if (prdStock === true) {
    alert("Buy now");
  } else if (prdStock === false) {
    alert("Out of stock");
  } else {
    alert("Invalid product");
  }
}

// -----------------------------------------------------------------------

// Task No 27
// Work Hours Check
// Check based on hoursWorked and isWeekend:
// ● "Overtime" if hours > 40 and not a weekend
// ● "Weekend work" if hours > 0 and is weekend
// ● "Regular hours" if ≤ 40
// ● "No work" if hours === 0

function workHours() {
  var Overtime = prompt('How much hours you Worked...???');
  var weekend = confirm('today is weekend...???');

  if (Overtime > 40 && weekend !== true) {
    alert(`${Overtime} Hours Worked Overtime...`);
  }
  else if (Overtime > 0 && weekend === true) {
    alert(`${Overtime} Hours Weekend work`);
  }
  else if (Overtime > 0 && Overtime <= 40) {
    alert(`${Overtime} Regular hours`);
  }
  else {
    alert(`${Overtime} No Work`);
  }
}

// -----------------------------------------------------------------------

// Task No 28
// Age and Gender Classification
// Given a user's age and gender:
// ● "Teen Male" if age 13–19 and gender is "male"
// ● "Teen Female" if age 13–19 and gender is "female"
// ● "Adult" if age ≥ 20
// ● "Child" if age < 13


function GenderClassification() {
  var ageGender = prompt('How old are You...???');
  var checkGender = prompt('your Gender plz...???');

  if ((ageGender >= 13 && ageGender <= 19) && checkGender === "male") {
    alert(`Teen Male`);
  }
  else if ((ageGender >= 13 && ageGender <= 19) && checkGender === "female") {
    alert(`Teen Female`);
  }
  else if (ageGender >= 20) {
    alert(`Your Age is ${ageGender} \n your are Adult`);
  }
  else if (ageGender < 13) {
    alert(`Your Age is ${ageGender} \n your are Child`);
  }
  else {
    alert(`Invalid Inputs`);
  }
}

// -----------------------------------------------------------------------

// Task No 29
// Weather Warning System
// Based on temperature and humidity:
// ● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
// ● "Hot and Dry" if temp ≥ 40 and humidity < 60
// ● "Cool Weather" if temp ≤ 20
// ● "Moderate" otherwise

function weatherSystem() {
  var currentTemp = prompt('what is (Temperature)...???');
  var humidity = prompt('what is (Humidity)....???');

  if (currentTemp >= 40 && humidity >= 60) {
    alert(`the Weather is \nTemperature = ${currentTemp} \nHumidity =  ${humidity} \n Heat wave Alert`);
  }
  else if (currentTemp >= 40 && humidity < 60) {
    alert(`the Weather is \nTemperature = ${currentTemp} \nHumidity =  ${humidity} \n Hot and Dry`);
  }
  else if (currentTemp <= 20) {
    alert(`Cool Weather`);
  }
  else {
    alert(`Moderate`);
  }
}

// -----------------------------------------------------------------------


// Task No 30
// Score Grading System
// Given a score between 0–100:
// ● "Excellent" for 90–100
// ● "Good" for 70–89
// ● "Average" for 50–69
// ● "Poor" for 30–49
// ● "Fail" below 30
// ● "Invalid Score" if out of range

function scoreGradeSystem() {
  var GradeScore = prompt('Dear Student tell me You Score...???');

  if (GradeScore >= 90 && GradeScore <= 100) {
    alert(`you Got ${GradeScore} Marks \n Excellent!`);
  }
  else if (GradeScore >= 70 && GradeScore < 80) {
    alert(`you Got ${GradeScore} Marks \n Good!`);
  }
  else if (GradeScore >= 50 && GradeScore < 70) {
    alert(`you Got ${GradeScore} Marks \n Average!`);
  }
  else if (GradeScore >= 30 && GradeScore < 50) {
    alert(`you Got ${GradeScore} Marks \n Poor!`);
  }
  else if (GradeScore < 30) {
    alert(`you Got ${GradeScore} Marks \n Fail!`);
  }
  else {
    alert(`you inputs ${GradeScore} Marks \n Invalid Score`);
  }
}

// -----------------------------------------------------------------------

// Task No 31
// Course Access Control
// To access a course:
// ● Must be logged in
// ● Must be enrolled
// ● Must not be banned
// Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"


function courseAccess() {
  var courseLogin = confirm('are you Login...???');
  var courseEnroll = confirm('Are you Enrolled in Course...???');
  var courseBanned = confirm('Are you Banned From Course...???');

  if (courseLogin === true && courseEnroll === true && courseBanned === false) {
    alert(`Access Granted...!!!`);
  }
  else if (courseEnroll === false) {
    alert(`Enroll in course first`);
  }
  else if (courseBanned === true) {
    alert(`User is Banned`);
  }
  else {
    alert(`Please Login First`);
  }
}

// -----------------------------------------------------------------------

// Task No 32
// Driving Conditions
// Given a user's speed and license status:
// ● "License suspended" if speed > 120
// ● "Warning" if speed between 100–120
// ● "Normal driving" if speed ≤ 100 and has license
// ● "Driving without license" otherwise

function drivingCondition() {
  var bikeSpeed = +prompt('How Much Speed Are you Riding Bike...??? \n over the 120 will suspend');
  var hasLicense = confirm('you Have License...???');

  if (bikeSpeed > 120) {
    alert(`your Bike Speed ${bikeSpeed} is too High Your License Suspended`);
  }
  else if (bikeSpeed >= 100 && bikeSpeed <= 120) {
    alert(`your Bike Speed ${bikeSpeed} \n You're in (Warning High Risk)`);
  }
  else if (bikeSpeed < 100 && hasLicense === true) {
    alert(`your Bike Speed ${bikeSpeed} \n You're Riding (Normal driving)`);
  }
  else {
    alert(`Driving without license`);
  }
}

// -----------------------------------------------------------------------

// Task No 33
// Order Processing Status
// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed


function orderStatus() {
  var onlineOrder = confirm('is Payment is Completed or not...???');
  var shipped = confirm("the Product is Shipped or not...???");

  if (onlineOrder === true && shipped === true) {
    alert(`Order on the way`);
  }
  else if (onlineOrder === true && shipped === false) {
    alert(`Preparing your order`);
  }
  else if (onlineOrder === false) {
    alert(`Awaiting payment`);
  }
  else {
    alert(`Payment failed`);
  }
}

// -----------------------------------------------------------------------

// Task No 34
// Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise

function batteryStatus() {
  var batteryLevel = +prompt('Howm Much You Phone Battery Charged...???');
  var isCharging = confirm("is the Phone Charging...???");

  if (batteryLevel === 100) {
    alert(`Fully Charged`);
  }
  else if (batteryLevel < 100 && isCharging === true) {
    alert(`your Phone Charge is ${batteryLevel} \n Still now Charging!`);
  }
  else if (batteryLevel < 20 && isCharging === false) {
    alert(`your Phone Charge is ${batteryLevel} \n Low Battery!`);
  }
  else {
    alert(`Battry OK`);
  }
}

// -----------------------------------------------------------------------

// Task No 35
// Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers

function browserDeviceChecing() {
  var Browser = prompt('which Browser is Using now...??? \n Write Chrome');
  var Device = prompt('what is your Device...??? \n(Desktop or Mobile)');

  if (Browser === "Chrome" && Device === "Desktop") {
    alert(`Your Browser is = ${Browser} \nyour Device is = ${Device} \nit's means (Full Features Enabled)`);
  }
  else if (Browser === "Chrome" && Device === "Mobile") {
    alert(`Your Browser is ${Browser} \nyour Device is = ${Device} \nit's means (Limited mobile features)`);
  }
  else {
    alert(`Please switch to Chrome`);
  }

}
// -----------------------------------------------------------------------