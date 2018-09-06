var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function quad()
{ 
    read.question("Enter the value of a: ",(a)=>
    {
        read.question("Enter the value of b: ",(b)=>
    {
       read.question("Enter the value of c: ", (c)=>
        {
                utility.quad(a,b,c);
                read.close();
    })
  })
})
    
}
quad();