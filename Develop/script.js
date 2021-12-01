// Assignment code here
var charLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var charUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var charNumb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charSpec = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "|",
  "[",
  "]",
  ";",
  "'",
  ":",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
];
var passwordOptions = [];

var start = function () {
  window.alert(
    "Welcome to the Password Generator. You will be given a series of criteria from which to select."
  );

  var passwordLength = window.prompt(
    "How long should your password be (Must be a value between 8 and 128)?"
  );
  if (typeof passwordLength !== "number") {
    window.alert("This input can only accept numbers. Try again.");
    passwordLength();
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("That is not a valid number. Try again.");
    passwordLength();
  }

  var charLowerPrompt = window.prompt(
    "Would you like your password to have lowercase letters (Type 'yes' or 'no')?"
  );
  if (charLowerPrompt !== "yes" || charLowerPrompt !== "no") {
    window.alert("That is not a valid input. Type 'yes' or 'no'.");
    charLower();
  }
  if (charLowerPrompt === "yes") {
    passwordOptions.push(charLower);
  }

  var charUpperPrompt = window.prompt(
    "Would you like your password to have uppercase letters (Type 'yes' or 'no')?"
  );
  if (charUpperPrompt !== "yes" || charUpperPrompt !== "no") {
    window.alert("That is not a valid input. Type 'yes' or 'no'.");
    charUpper();
  }
  if (charUpperPrompt === "yes") {
    passwordOptions.push(charUpper);
  }

  var charNumbPrompt = window.prompt(
    "Would you like your password to have numbers (Type 'yes' or 'no')?"
  );
  if (charNumbPrompt !== "yes" || charNumbPrompt !== "no") {
    window.alert("That is not a valid input. Type 'yes' or 'no'.");
    charNumb();
  }
  if (charNumbPrompt === "yes") {
    passwordOptions.push(charNumb);
  }

  var charSpecPrompt = window.prompt(
    "Would you like your password to have special characters (Type 'yes' or 'no')?"
  );
  if (charSpecPrompt !== "yes" || charSpecPrompt !== "no") {
    window.alert("That is not a valid input. Type 'yes' or 'no'.");
    charSpec();
  }
  if (charSpecPrompt === "yes") {
    passwordOptions.push(charSpec);
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
