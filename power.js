var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function powerTwo()
{ 
    read.question("Enter any interger value ", function(userInput)
    {
        utility.powerTwo(userInput);
           read.close();
    });
}

powerTwo();