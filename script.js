// Assignment Code
var generateBtn = document.querySelector("#generate");

var letter = ["a", "b", "c", "d"]
var special = ["!", "@", "$", "%"]
var num = ["1", "2", "3", "4"]
var final = []
// Write password to the #password input
function writePassword() {
  function generatePassword() { 
    length = 0
    while (length < 8 || length >128) {
    var length = prompt("how long do you want your password to be? Please select bewteen 8 and 120 characters")
    if (length < 8 || length > 128) {
      window.alert("please enter a number between 8 and 120")
    }
    }

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
