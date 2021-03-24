// Assignment Code
var generateBtn = document.querySelector("#generate");

function question() {
  window.alert("hello")
}

console.log(generateBtn)

generateBtn.onclick = question()







function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button



generateBtn.addEventListener("click", writePassword);
