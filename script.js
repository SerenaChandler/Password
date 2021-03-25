// Assignment Code
var generateBtn = document.querySelector("#generate");

var letter = ["a", "b", "c", "d"]
var special = ["!", "@", "$", "%", "`", "&", "$", "*"]
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var final = []


function letters() {
  var letter = prompt("Would you like your password to contain letters?") 
  return letter   
}

function specials() {
  var special = prompt("would you like your password to contain special characters?")
  return special
}

function numbers() {
  var number = prompt("would you like your password to contain numbers?")
  return number
}

function Uppers() {
  var upper = prompt("would you like your password to contain uppercase letters?")
  return upper
}








function writePassword() {
  function generatePassword() { 
    length = 0
    while (length < 8 || length >128) {
    var length = prompt("how long do you want your password to be? Please select bewteen 8 and 120 characters")
    if (length < 8 || length > 128 || length == String) {
      window.alert("please enter a number between 8 and 120")
    }
    }

    letters()
    specials()
    numbers()
    Uppers()



    if (upper == "yes")
    for (i = 0; i < length; i++) {
      final.unshift(letter[Math.floor(Math.random()*4)])
      final.unshift(special[Math.floor(Math.random()*4)])
      final.unshift(num[Math.floor(Math.random()*4)])
    }


  return final
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword)
