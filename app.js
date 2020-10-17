var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var sChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var emojis = [":)", ":(", ":-P", "xD", "UwU", "¯\_(ツ)_/¯", "(¬‿¬)", "(• ε •)", "(ノಠ益ಠ)ノ彡┻━┻", "(づ￣ ³￣)づ", "=U"];

// password output
var pwoutput = document.querySelector("pwArea");

function generate(){
// stores posible characters for the password
var possibles = [];

// parseInt makes the input into integer //
// ask for user input //
var pCount = parseInt(prompt("Please choose a how many characters you want for your password, between 8 - 128:"));

// if statement starts here
    if(!(pCount < 8 || pCount > 128 || isNaN(pCount))){
        var charsTrue = confirm("Do you want Chars?");
        var numsTrue = confirm("Do you want nums?");
        var sCharsTrue = confirm("Do you want special character?");
        var emojisTrue = confirm("Do you want emojis?");
        var capitalTrue = confirm("Do you want capital letters?");

        if (charsTrue) {possibles.push(chars)}
        if (numsTrue) {possibles.push(nums)}
        if (sCharsTrue) {possibles.push(sChars)}
        if (emojisTrue) {possibles.push(emojis)}
        if (capitalTrue) {possibles.push(capital)}

        var passw;

        passw = "";

        while (passw.length < pCount) {
         for (let i = 0; i < possibles.pCount; i++) {
          if (passw.length < pCount) {
              let rand = Math.floor(Math.random () * possibles[i].pCount);
              passw += possibles[i][rand];
              console.log(possibles[i][rand]);
          }
          }
        }
        // console.log(passw, 'password length: ' + passw.length);
        pwoutput.textContent = passw;
    } else {
    // stops the program if the value is under and over //
    alert("Choose between 8 - 128 ONLY");
    // continues once the user input is valid
    }
}
document.querySelector("#generate").addEventListener("click", generate);