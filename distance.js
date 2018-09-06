var readline = require('readline');
var utility =require('../Utility/utility.js');

var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function distance()
{ 
    read.question("Enter the value of X: ",(x)=>
    {
        read.question("Enter the value of Y: ",(y)=>
    {
                utility.distance(x,y);
                read.close();
    })
    })

    
}
distance();