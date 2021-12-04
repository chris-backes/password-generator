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

var writePassword = function () {
  //putting these at the top of the function also ensures that they get reset if the button is pressed again
  var passwordOptions = [];
  var passwordGenerated = [];
  var passwordLength;
  var answerTicker = 0;

  window.alert(
    "Welcome to the Password Generator. You will be given a series of criteria from which to select."
  );
  //five window prompts for the password parameters
  var passwordLengthPrompt = function () {
    //parse answer into integer
    passwordLength = parseInt(
      window.prompt(
        "How long should your password be (Must be a value between 8 and 128)?"
      )
    );
    //checks if the input is a number
    if (isNaN(passwordLength)) {
      window.alert("This input can only accept numbers. Try again.");
      passwordLengthPrompt();
      //forces ineger to be within the boundaries
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("That is not a valid number. Try again.");
      passwordLengthPrompt();
    }
  };

  var charLowerPrompt = function () {
    var charLowerQues = window.prompt(
      "Would you like your password to have lowercase letters (Type 'yes' or 'no')?"
    );
    if (charLowerQues === "yes") {
      //adds lowercase characters into larger array from which the password while be generated from
      passwordOptions = passwordOptions.concat(charLower);
      //adds one character to the password from the lower case characters
      passwordGenerated.push(
        charLower[Math.round(Math.random() * charLower.length)]
      );
      //Shortens the passwordLength by 1 to account for the character that was just added
      passwordLength--;
      //This adds a value to a variable that gets checked for equaliing to zero, if it does, the program starts over becasue the person failed to select any of the options.
      answerTicker++;
    } else if (charLowerQues === "no") {
      //This was left blank because removing it would cause 'no'answers to the window.alert even if theat was specified to only take answers which were not yes or no.
    } else {
      window.alert("Not a valid answer! Try again");
      charLowerPrompt();
    }
  };

  var charUpperPrompt = function () {
    var charUpperQues = window.prompt(
      "Would you like your password to have uppercase letters (Type 'yes' or 'no')?"
    );
    if (charUpperQues === "yes") {
      passwordOptions = passwordOptions.concat(charUpper);
      passwordGenerated.push(
        charUpper[Math.round(Math.random() * charUpper.length)]
      );
      passwordLength--;
      answerTicker++;
    } else if (charUpperQues === "no") {
    } else {
      window.alert("Not a valid answer! Try again");
      charUpperPrompt();
    }
  };

  var charNumbPrompt = function () {
    charNumbQues = window.prompt(
      "Would you like your password to have numbers (Type 'yes' or 'no')?"
    );
    if (charNumbQues === "yes") {
      passwordOptions = passwordOptions.concat(charNumb);
      passwordGenerated.push(
        charNumb[Math.round(Math.random() * charNumb.length)]
      );
      passwordLength--;
      answerTicker++;
    } else if (charNumbQues === "no") {
    } else {
      window.alert("Not a valid answer! Try again");
      charNumbPrompt();
    }
  };

  var charSpecPrompt = function () {
    charSpecQues = window.prompt(
      "Would you like your password to have special characters (Type 'yes' or 'no')?"
    );
    if (charSpecQues === "yes") {
      passwordOptions = passwordOptions.concat(charSpec);
      passwordGenerated.push(
        charSpec[Math.round(Math.random() * charSpec.length)]
      );
      passwordLength--;
      answerTicker++;
    } else if (charSpecQues === "no") {
    } else {
      window.alert("Not a valid answer! Try again");
      charLowerPrompt();
    }
  };
  passwordLengthPrompt();
  charLowerPrompt();
  charUpperPrompt();
  charNumbPrompt();
  charSpecPrompt();

  //If someone fails to choose any of the for options, this resets the prompts back to start.
  if (answerTicker === 0) {
    window.alert(
      "you have failed to select at least one option. Please try again."
    );
    writePassword();
  }
  //adds the reamining characters into the password
  for (let i = 0; i < passwordLength; i++) {
    passwordGenerated.push(
      passwordOptions[Math.round(Math.random() * passwordOptions.length)]
    );
  }

  //Because selecting yes to any of the first four options makes it such that they will always appear in that point of the password, we shuffle to avoid the first four types always appearing in the same order
  passwordGenerated = passwordGenerated.sort((a, b) => 0.5 - Math.random());
  //Turns array into string
  passwordGenerated = passwordGenerated.join("");

  var passwordText = document.querySelector("#password");
  passwordText.value = passwordGenerated;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
