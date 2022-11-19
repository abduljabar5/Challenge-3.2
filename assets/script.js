// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","@","#","$","%","&","*","?"];
var randomList = []
var passworCreated = []



function promptUser(){
    randomList = []
    passworCreated = []
       //console.log(randomList);
       passworCreated = ""
    var amountChoosen = window.prompt("how long do you want your password?")
    if (amountChoosen < 8 || amountChoosen > 129){
        window.alert("no")
        return
    } 
    var userWantsLower = window.confirm("do you want lower case letters?");
    var userWantsCap = window.confirm("do you want lower capital letters?");
    var userWantsNumbers = window.confirm("do you want to include Numbers in your password?");
    var userWantsSpecial = window.confirm("do you want to include specialCharacters in your password?");
 for (var i= 0; i < amountChoosen; i++){
    
    if (userWantsLower){
        var index = Math.floor(Math.random() * lowerCase.length)
 var ran = lowerCase[index]
 randomList.push(ran);
    } 
    
    if (userWantsCap){
        var index = Math.floor(Math.random() * capLetter.length);
 var ran = capLetter[index]
 randomList.push(ran);

    }
    if (userWantsNumbers){
        var index = Math.floor(Math.random() * numbers.length);
        var ran = numbers[index]
        randomList.push(ran);
    }
    if (userWantsSpecial){
        var index = Math.floor(Math.random() * specialCharacters.length);
        var ran = specialCharacters[index]
        randomList.push(ran);
    } else {
        return
    }
  
 




    
     var finalIndex = Math.floor(Math.random() * randomList.length)
var finalRan = randomList[finalIndex];
passworCreated += finalRan;

 }
 


}

 
  
   

function generatePassword(){
    promptUser();
return passworCreated
}
// Write password to the #password input
function writePassword() {

     var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

