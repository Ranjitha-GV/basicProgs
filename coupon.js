var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function coupon()
{ 
    read.question("Enter the min integer value to generate random numbers: ",(min)=>
    {
        read.question("Enter the max integer value to generate random numbers: ",(max)=>
    {
       read.question("Enter the number of coupons ", (no)=>
        {
                utility.coupon(min,max,no);
                read.close();
    })
  })
})
    
}
coupon();