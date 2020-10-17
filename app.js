let chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let Cchars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let nums = [1,2,3,4,5,6,7,8,9,0];
let sChars = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
let emojis = [":)",":(",":-P","xD","UwU","¯\_(ツ)_/¯","(¬‿¬)","(• ε •)","(ノಠ益ಠ)ノ彡┻━┻","(づ￣ ³￣)づ","=U",""];

// stores posible characters for the password
var possibles = [];

// parseInt makes the input into integer //
// ask for user input //
var lenght = parseInt(prompt("Please choose a how many characters you want for your password, between 8 - 128:"));

// if statement starts here
if(!length) {
    alert("Please enter a value");
} else if (length < 8 || length > 128 || isNaN(length)){
    // stops the program if the value is under and over //
    var lenght = parseInt(prompt("Choose between 8 - 128 ONLY"));
}
// continue once user input is correct //
else{
    var charsTrue = confirm("Do you want Chars?");
    var numsTrue = confirm("Do you want Chars?");
    var sCharsTrue = confirm("Do you want Chars?");
    var emojiTrue = confirm("Do you want Chars?");


    if (charsTrue) possibles.push(chars)
    if (numsTrue) possibles.push(nums)
    if (sCharsTrue) possibles.push(sChars)
    if (emojisTrue) possibles.push(emojis)

    var pw = "";

    while (pw.length < length){
    for (let i = 0; i < possibles.length; i++){
        let rand = math.floor(math.random () possibles[i].length);
        pw += possibles[i][rand]
        }
        console.log(pw);
    }
}