var userName = prompt("What is your name?");
var userQuestion = prompt("What question do you have for the Magic Eightball???");
var randomNumber = Math.floor(Math.random() * 7) + 1;
var eightBall = "";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

console.log(`${userName}, your question is ${userQuestion}`);

switch(randomNumber) {
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}
alert(eightBall);