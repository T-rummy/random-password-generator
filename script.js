var longPassword = [];
var generatePassword = function(){ 

 var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
 var numbers = ["0123456789"];
 var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
 var specialChar = ["#$%+-?,@,^,|,~"];

 var rndnum = 0;


 var characterAmount = window.prompt = parseInt(prompt("How many charcters between 8 - 128 would you like your password to be?"));

while (characterAmount < 8 || characterAmount > 128) {
 window.alert("That character amount does not fit what we allow, please refresh the page and submit an amount between 8 -128");
 var characterAmount = window.prompt = parseInt(prompt("How many charcters between 8 - 128 would you like your password to be?"));
break;
}


 var lowerConfirm = window.confirm("Do you want to allow lower case?");
 var upperConfirm = window.confirm("Do you want to allow upper case?");
 var specialConfirm = window.confirm("Do you want to allow special characters?");
 var numConfirm = window.confirm("Do you want to allow numeric characters?");


 var finalPassword = [];
 var tempPassword = "";

 if (lowerConfirm){
 finalPassword += lowerCase;
 }

 if (upperConfirm) {
   finalPassword += upperCase;
 }

 if (numConfirm) {
   finalPassword += numbers;
 }

 if (specialConfirm) {
   finalPassword += specialChar;
 }
var randomNumber = function(){
 rndnum = Math.floor(Math.random() * (finalPassword.length));
console.log(rndnum);
 return rndnum;
}
 var random = finalPassword[randomNumber()];
//var random = Math.floor(Math.random() * finalPassword.length);

console.log(finalPassword.length);  
for(var i = 1; i <= characterAmount; i++) {
 
 
  //console.log(finalPassword[i]);
  tempPassword += random;
  console.log(tempPassword);
 
  
  //random = (random, finalPassword[random]);
  
  random = finalPassword[randomNumber()];
  //var random = Math.floor(Math.random());
  

};
 
return tempPassword;
}



 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
   
}








 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);