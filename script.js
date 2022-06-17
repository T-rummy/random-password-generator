var longPassword = [];
var generatePassword = function(){ 

 var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
 var numbers = ["0123456789"];
 var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
 var specialChar = ["#$%+-?,@,^,|,~"];

 var rndnum = 0;
 var characterAmount = window.prompt("How many charcters between 8 - 128 would you like your password to be?");
 if (characterAmount > 128 || characterAmount < 8) {
   window.alert("That character amount is not allowed, please try again.")
   return generatePassword();
 }; 
 
 
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


console.log(finalPassword.length);  
for(var i = 1; i <= characterAmount; i++) {
 
 
  
  tempPassword += random;
  console.log(tempPassword);
 
  
  
  
  random = finalPassword[randomNumber()];
  
  

};
 
return tempPassword;
}

  
    
  




 

var generateBtn = document.querySelector("#generate");


function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
   
}








 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);