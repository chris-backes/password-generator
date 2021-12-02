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
  ":",
  "<",
  ">",
  "?",
  ",",
  "/",
];
var passwordOptions = [];
var passwordGenerated = [];
var forcedInputs = 0;
var passwordLength;

var writePassword = function () {
  window.alert(
    "Welcome to the Password Generator. You will be given a series of criteria from which to select."
  );
  var passwordLengthPrompt = function () {
    passwordLength = parseInt(
      window.prompt(
        "How long should your password be (Must be a value between 8 and 128)?"
      )
    );
    if (isNaN(passwordLength)) {
      window.alert("This input can only accept numbers. Try again.");
      passwordLengthPrompt();
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("That is not a valid number. Try again.");
      passwordLengthPrompt();
    }
  };

  var charLowerPrompt = function () {
    var charLowerQues = window.confirm(
      "Would you like your password to have lowercase letters (Hit 'Okay' for yes and 'Cancel' for no)?"
    );
    if (charLowerQues) {
      passwordOptions = passwordOptions.concat(charLower);
      passwordGenerated.push(
        charLower[Math.round(Math.random() * charLower.length)]
      );
      forcedInputs = forcedInputs + 1;
    }
  };

  var charUpperPrompt = function () {
    var charUpperQues = window.confirm(
      "Would you like your password to have uppercase letters (Hit 'Okay' for yes and 'Cancel' for no)?"
    );
    if (charUpperQues) {
      passwordOptions = passwordOptions.concat(charUpper);
      passwordGenerated.push(
        charUpper[Math.round(Math.random() * charUpper.length)]
      );
      forcedInputs = forcedInputs + 1;
    }
  };

  var charNumbPrompt = function () {
    charNumbQues = window.confirm(
      "Would you like your password to have numbers (Hit 'Okay' for yes and 'Cancel' for no)?"
    );
    if (charNumbQues) {
      passwordOptions = passwordOptions.concat(charNumb);
      passwordGenerated.push(
        charNumb[Math.round(Math.random() * charNumb.length)]
      );
      forcedInputs = forcedInputs + 1;
    }
  };

  var charSpecPrompt = function () {
    charSpecQues = window.confirm(
      "Would you like your password to have special characters (Hit 'Okay' for yes and 'Cancel' for no)?"
    );
    if (charSpecQues) {
      passwordOptions = passwordOptions.concat(charSpec);
      passwordGenerated.push(
        charSpec[Math.round(Math.random() * charSpec.length)]
      );
      forcedInputs = forcedInputs + 1;
    }
  };
  passwordLengthPrompt();
  charLowerPrompt();
  charUpperPrompt();
  charNumbPrompt();
  charSpecPrompt();

  for (let i = 1; i <= passwordLength - forcedInputs; i++) {
    passwordGenerated.push(
      passwordOptions[Math.round(Math.random() * passwordOptions.length)]
    );
  }
  console.log(passwordGenerated);
  passwordGenerated = passwordGenerated.join("");
  console.log(passwordGenerated);
  //Because selecting yes to any of the first four options makes it such that they will always appear in that point of the password, we shuffle to avoid the first four types
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
