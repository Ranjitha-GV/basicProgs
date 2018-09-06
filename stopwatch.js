var readline = require('readline');
var utility =require('../Utility/utility.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function stopWatch()
{ 
    read.question("Press 1 to start the stopwatch!!   ", function(userInput)
    {
        var startTime=0,endTime=0;
        if(userInput==1)
        {   startTime = utility.getCurrentTime();
            console.log("The start time is: "+startTime/1000);
           read.question("Press 2 to end the stopwatch!!   ", function(userInput1)
           {
               if(userInput1==2)
               {
               endTime = utility.getCurrentTime();
               console.log("The end time is: "+endTime/1000);
               var res = utility.ellapse(startTime,endTime);
               console.log("The ellapsed time is "+res+" seconds");
               read.close();
               }
               else
               {
                console.log("Invalid key press!!");
                read.close();
               }
              
            });
        }
            else
               {
                   console.log("Invalid key press!!");
                   read.close();
               }
            
            });
        }
    stopWatch();