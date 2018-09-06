
var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
   function nameDisp()
   {
       read.question("Enter your name: ", function(userInput){
           utility.nameDisp(userInput);
           read.close();
       });
   }
nameDisp();
