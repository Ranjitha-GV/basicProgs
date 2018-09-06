var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function flipCoin()
{ 
    read.question("Enter number of times you want to flip the coin:", function(userinput)
    {
        utility.flipCoin(userinput);
        
           read.close();
    });
}

flipCoin();