var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var emojis = [":)", ":(", ":-P", "xD", "UwU", "¯\_(ツ)_/¯", "(¬‿¬)", "(•ε•)", "(ノಠ益ಠ)ノ彡┻━┻", "(づ￣³￣)づ", "=U"];

// password output
var answer = document.querySelector("#passwordArea");
// generate button function
function generate() {
  // stores possible characters to generate the password
  var possibles = [];
  // parseInt makes the input into integer //
  var length = parseInt(prompt("How long does this password need to be?"));
  // if statement starts here
  if (!(length < 8 || length > 128 || isNaN(length))) {
      var charsTrue = confirm("Do you want chars?");
      var numsTrue = confirm("Do you want nums?");
      var capitalTrue = confirm("Do you want capital letters?");
      var specialCharsTrue = confirm("Do you want special characters?");
      var emojisTrue = confirm("Do you want emojis?");
      // user input for password category they like
      if (charsTrue) { possibles.push(chars); }
      if (numsTrue) { possibles.push(nums); }
      if (capitalTrue) { possibles.push(capital); }
      if (specialCharsTrue) { possibles.push(specialChars); }
      if (emojisTrue) { possibles.push(emojis); }
      // password placeholder
      var pw;
      pw = "";
      // logic for the password generator
      while (pw.length < length) {
        for (let i = 0; i < possibles.length; i++) {
          if (pw.length < length) {
              let rand = Math.floor(Math.random() * possibles[i].length);
              pw += possibles[i][rand];
              console.log(possibles[i][rand]);
          }
        }
      }
      // returns the password to the text area
      console.log(pw, `password length: ${pw.length}`);
      answer.textContent = pw;
  } else {
    alert("Choose between 8 - 128 ONLY");
  }
}

document.querySelector("#generate").addEventListener("click", generate);