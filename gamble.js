var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function gambler()
{ 
    read.question("Enter the number of gambles: ",(userInput)=>
    {
        read.question("Enter the amount in stake: ", (amt)=>
        {
            read.question("Enter the goal amount: ", (goal)=>{
             utility.gambler(userInput,amt,goal);
                
            
                read.close();
        })
    })
})
    
}
gambler();