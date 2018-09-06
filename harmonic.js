var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function harmonic()
{ 
    read.question("Enter the value of N: ", (userinput)=>
    {
        utility.harmonic(userinput);
        
           read.close();
    });
}

harmonic();