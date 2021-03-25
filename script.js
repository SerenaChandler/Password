// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
var specialArray = ["!", "@", "$", "%", "`", "&", "$", "*"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var finalArray = []


function letters() {
  var wantletter = prompt("Would you like your password to contain letters?") 
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
  finalArray = []
  function generatePassword() { 
    length = 0
    while (length < 8 || length >128) {
    var length = prompt("how long do you want your password to be? Please select bewteen 8 and 120 characters")
    if (length < 8 || length > 128 ) {
      window.alert("please enter a number between 8 and 120")
    }
    }

    var special = specials()
    var number = numbers()
    var letter = letters()
    var upper = Uppers()
    
    if (special == "yes" && number == "yes" && letter == "yes") {
      for (var i = 0; i < length/3 ; i++) {
        finalArray.unshift(specialArray[Math.floor(Math.random()*8)])
    }
    
      for(var i = 0; i < length/3; i++){
        finalArray.unshift(numberArray[Math.floor(Math.random()*10)])
    }
    
      for(var i = 0; i < length/3; i++){
        finalArray.unshift(letterArray[Math.floor(Math.random()*4)])
      }
    if(length % 2 == 0){
      finalArray.pop()
    }}
    
  
  
       
  return finalArray
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword)
