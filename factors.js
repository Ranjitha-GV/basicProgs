var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function primeFactor()
{ 
    read.question("Enter the value of N: ", function(userinput)
    {
        utility.primeFactor(userinput);
           read.close();
    });
}

primeFactor();