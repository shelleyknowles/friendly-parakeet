// Assignment code here
// Define what characters are available
// Uppercase letter, special character, numbers, lowercase letters
var UpperCaseLetters = ['A','B','C']; 
var specialCharacters = ['!','@','#']; 
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var lowerCaseLetters = ['a','b','c','d']
var chosenCharacters = ['']

//I will need to prompt for the password length
var passwordLength = 10

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
window.prompt



var includeUpperCaseLetters = confirm ("Use upper case letters?")
var generatedPassword = ''
if (includeUpperCaseLetters) {
  chosenCharacters = chosenCharacters.concat (UpperCaseLetters)
}

var includeSpecialCharacters = confirm ("Use special characters?")
var generatedPassword = ''
if (includeSpecialCharacters){
  chosenCharacters = chosenCharacters.concat (specialCharacters)
}

var includeNumbers = confirm ("Use numbers?")
var generatedPassword = ''
if (includeNumbers) {
  chosenCharacters = chosenCharacters.concat (includeNumbers)
}

var includelowerCaseLetters = confirm ("Use lower case letters?")
var generatedPassword = ''
if (includelowerCaseLetters) {
  chosenCharacters = chosenCharacters.concat (lowerCaseLetters)
}

for (var i=0; i < passwordLength; i++) {
  return generatedPassword.toString
}
//generate a random number called fred that is within the range of our chosen characters
//select chosen characters [fred]
//add selected character to password


  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
