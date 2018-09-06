var readline = require('readline');
var utility =require('../Utility/utility.js');

var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function windChill()
{ 
    read.question("Enter the temperature in fahrenheit: ",(temp)=>
    {
        read.question("Enter the speed of wind in miles per hour: ",(wind)=>
    {
        utility.windChill(temp,wind);
                read.close();
    })
})

    
}
windChill();
