// Assignment Code
var generateBtn = document.querySelector("#generate");
var arrayCheck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "p", "w", "x", "y", "z" ]
var specialArray = ["!", "@", "$", "%", "`", "&", "$", "*", "/", "-"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upperLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
var finalArray = []

// these funtions take in user input
function letters() {
  var wantletter = prompt("Would you like your password to contain lowercase letters?") 
  return wantletter   
}

function specials() {
  var wantSpecial = prompt("would you like your password to contain special characters?")
  return wantSpecial
}

function numbers() {
  var wantNumber = prompt("would you like your password to contain numbers?")
  return wantNumber
}

function Uppers() {
  var wantUpper = prompt("would you like your password to contain uppercase letters?")
  return wantUpper
}








function writePassword() {
  // finalArray is made blank here to reset the password if another one is requested
  finalArray = []
  function generatePassword() { 
    length = 0
    while (length < 8 || length >128) {
    var length = prompt("how long do you want your password to be? Please select bewteen 8 and 120 characters")
    if (length < 8 || length > 128 ) {
      window.alert("please enter a number between 8 and 128")
    }
    }

    // the functions from earlier are assigned to a new variable and used to check what to add to the password
    var special = specials()
    var number = numbers()
    var letter = letters()
    var upper = Uppers()

    while (finalArray.length < length) {
      if (special == "yes") {
        finalArray.unshift(specialArray[Math.floor(Math.random()*10)])
      }if (number == "yes") {
        finalArray.unshift(numberArray[Math.floor(Math.random()*10)])
      }if (letter == "yes") {
        finalArray.unshift(letterArray[Math.floor(Math.random()*10)])
      }if (upper == "yes") {
        finalArray.unshift(upperLetterArray[Math.floor(Math.random()*10)])
      }
    }
    

    // used .join("") to prevent the password from also using the commas from the array
    finalArray.length = length
    finalArrayString = finalArray.join("")
  return finalArrayString}

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword)
