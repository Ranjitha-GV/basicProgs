const lod=require('lodash');
module.exports=
    {
/** 
 * @description Function to display Name as entered by the user.
 * @param userInput holds the name entered by the user
 */
nameDisp: function(userInput)
    {
    /**
     * @description Check if the user is entering a string of length greater than 3 and also that the input is not a integer value
     */
    if(userInput.length>=3 &&  (userInput>='a' && userInput<='z' || userInput>='A' && userInput<='Z'))    
       {
           console.log("Hi "+ userInput+" how are you doing today?");
       }
        else
       {
           console.log("Please enter a valid name!! ");
       }
    },
/****************************************************************************************************/

 /**
 * @description Function to predict the outcome of coin flips.
 * @param userInput holds the number of times coin needs to be flipped 
 */

flipCoin: function(userInput)
    {   
        var hCount=0, tCount=0;
        /**
         * @description Loop to run the code number of times as the user wishes to flip the coin
         */
        for(var i=0;i<userInput;i++)
        {
        /**
         * @description Generate random number to predict possibilities of number and heads and tails
         */
        if(Math.random() < 0.5)
            {
                /**
                 * @description Increment tail count if random value is less than 0.5
                 */
                tCount++;
            }
            else
            {
                /**
                 * @description Increment head count if random value is greater than 0.5
                 */
                hCount++;
            }
        }
        /**
         * @description calculate the percentage of heads and tails
         */
            console.log("Headcount is "+hCount+ " Percentage of head is "+ (hCount/userInput)*100+"%");
            console.log("Tailcount is "+tCount+ " Percentage of tail is "+ (tCount/userInput)*100+"%");
    },
/*****************************************************************************************************/
/**
 * @description Calculate if the given year is a leap year or not
 * @param UserInput fetches the year entered by the user
 */
leapYear: function(userInput)
        {
            /**
             * @description assign user input to variable year
             */
            var year= userInput;
            /**
             * @description calculate if the year is a leap year or not
             */
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 
                {
                    console.log("Its a leap year");
                }
                else
                {
                    console.log("Its not a leap year");
                }
         },
/***************************************************************************************************/
/**
 * @description Finding the powers of 2. 
 * @param UserInput holds the number of powers of 2 user prefers
 */
powerTwo: function(userInput)
        {
            /**
             * @description n is the number of powers of 2 user wants to get as output 
             */
            var powerOfTwo = userInput;
            /**
            * @description ranging the condition since 2^31 overflows stack
            */
             if(powerOfTwo>0 && powerOfTwo<31)
                 {
                    /**
                     * @description loop repeats number of times the user wants the powers of 2 to be displayed
                     */
                     for(var i=0;i<=powerOfTwo;i++)
                        {
                        /**
                         * @description Math.pow is the predefined function to calculate the powers of 2
                         */
                         console.log("2^"+i+" is "+Math.pow(2,i));
                        }
                }
                     else
               {
                        console.log("Please enter a number greater than 0 and less than 31");
               }
         },
/***************************************************************************************************/
         /**
          * @description Find the Nth harmonic series
          * @param userInput holds the number upto which user desires to know the harmonic value
          */
harmonic: function(userInput)
    {
        var sum=0;
      /**
      * @description Loop repeats number of times till it reaches nth value requested by the user
      * @param sum holds the result of nth harmonic series
      */
        for(var i=1;i<=userInput;i++)
            {
                /**
                * @description add the next number to the previously stored sum
                */
                 sum=sum+(1/i); 
            }
                 console.log("The value of the Nth harmonic series "+ sum)

    },
/*****************************************************************************************************/
             /**
             * @description Find all the prime factors for the given number
             * @param userInput takes a integer value as input from the user
             */
primeFactor: function(userInput)
     {
         /**
         * @param userInput hods value of power
         */
            var no =userInput; 
            /**
            * @description loop to repeat the factorization of the numbers
            */
            for(i=2;i<=no;i++) 
             {
               /**
                * @description finding factors of the given number
                */
                while(no%i==0)
                    {
                        console.log("Prime factor "+i);
                        no=no/i;
                    }
             }
                        console.log("Prime factor "+no);
    }, 
/****************************************************************************************************/
                /**
                 * @description Find the probability of a person winning and losing a gamble
                 * @param userInput holds the number of times the user wants to play the game
                 * @param amt holds the stake amount
                 * @param goal hols the goal of the user
                 */
gambler: function(userInput, amt, goal)
    {
        var goal,amt,win=0,loss=0;
        for(var i=1;i<=userInput;i++)
            {
                /**
                 * @description checking condition if the gambler reached his goal or lost the gamble
                 */
                    if(amt!=0 || amt<goal) 
                     {
                        /**
                         * @description check condition if the random number is greater than 0.5 then it is a win and if the random number is lesser than 0.5 then it is a loss
                         */
                            if(Math.random()>0.5)
                             {
                             /**
                             * @description increment win evertime the gambler wins
                             * @description increment the amount by $1 everytime the gambler wins
                             */
                                win++;
                                amt++;
                             }
                            else
                             {
                                /**
                                * @description decrement win evertime the gambler wins
                                * @description decrement the amount by $1 everytime the gambler wins
                                */
                                loss++;
                                amt--;
                             }
                     }
         }
        /**
         * @description calculating the percentage of win and loss
         */
        console.log("The number of gambles won is "+win+" and the percentage of wins is "+(win/userInput)*100);
        console.log("The number of gambles lost is "+loss+" and the percentage of loss is "+(loss/userInput)*100);
        console.log("The amount with the gambler at the end of the gamble is: $"+amt);

},
/*****************************************************************************************************/
    /**
     * @description Generate unique coupon codes within the given range
     * @param min holds the minimum range of random numbers 
     * @param max holds the max number of random numbers 
     * @param no holds the number of coupons to be generated
     */
coupon: function(min,max,no)
    {
        var max,min,no,arr1= [],arr=[];
        /**
         * @description loop to run the program to generate no number of coupons 
         */
         for(var k=1;k<=no;k++)
            {
             /**
              * @description push random numbers into the declared array
              */
                var n = lod.random(min,max);
                arr.push(n);
                var distinct = new Set(arr);
                arr1=Array.from(distinct);
            }
                 /**
                 * @description loop to run the program to compare random numbers 
                 */
              
                console.log("Distinct random numbers are "+arr1);//print the final array
                
         },
/*****************************************************************************************************/
         /**
          * @description  create a 2D array and take elements as input from the user
          */
array: function(row)
    {  
     /**
      * @param arr create a array with the size entered by the user
      */
        var arr= new Array(row);
        var prompt = require('prompt-sync')();//predefined function to take input from the user
        var column = prompt("Enter number of columns: ");//take input of number of columns from the user
        for(var i=0;i<row;i++)
          {
            /**
             * @param creates j columns in the ith row
             */
            arr[i]=new Array(column);
            for(var j=0;j<column;j++)
              {
                arr[i][j] = prompt("Enter the elements of the array:");//inputs elements of the array from the user
              }
          }
            console.log("The elements in the array are: "+arr);
            console.log(arr);
        }, 
/***************************************************************************************************/
            /**
             * @description Triplet sums to zero
             * @param no holds number of elements in the array
             */
sum: function(no)
    {
        var prompt = require('prompt-sync')();//predefined function to take input from the user
        var arr = new Array(no);//create a new array
        for(var i=0;i<no;i++)
            {
              arr[i] = prompt("Enter the elements for this array: ");//take the elements of the array from the user
            }
             for(j=0;j<no;j++) //loops to traverse the array
                {
                 for(k=j+1;k<no;k++) //loops to traverse the array
                    {
                        for(l=k+1;l<no;l++) //loops to traverse the array
                        {
                           var res = parseInt( arr[j])+parseInt (arr[k])+parseInt(arr[l]); //add elements to check for triplets sums to zero condition
                           var array= new Array();
                           var array1= new Array();
                           if(res==0)
                             {
                                array.push(arr[j]+', '+arr[k]+' ,'+arr[l]); //push all the elements that form triplets into a array
                                var distinct= new Set(array); //use set funtion to remove duplicate elements from the array
                                array1=Array.from(distinct); //covert the set to an array using from keyword
                                console.log("The triplets are: "+array1);
                             }
                        }
                    }
                }
                if(array1.length==0) //check condition if the array that contains triplets is empty or not
                 {
                    console.log("No triplets found!!")
                 }
        },
/*****************************************************************************************************/
            /**
             * @description Euclidean number
             */
 distance: function(x,y)
    {
        var x,y,result = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));//formula to calculate euclidean number
        console.log("The Euclidean value is "+result);

    },
/*****************************************************************************************************/
            /**
             * @description Stopwatch
             */ 
getCurrentTime: function()//function to find current time of the system
    {
        var date = new Date();//creating a date object 
        var n = date.getTime();//getTime function to get the current time of the system
        return n; 
    },
            /**
            * @description ellapse
            * @param startTime holds the start time of the stop watch
            */
ellapse: function(startTime,endTime)
    {
        var ellapse = (endTime-startTime)/1000;//calculating the difference between start time and end time 
        return ellapse;
    },
/*****************************************************************************************************/
             /**
             * @description Quadratic numbers
             */
quad: function(a,b,c)
    {
        var delta,x1,x2;
        delta=(b*b)-(4*a*c);//formula to calculate delta
        console.log("Delta value is: "+delta);
        if(delta>0)//condition to check if delta is positive 
            {
                x1=-b+Math.sqrt(delta)/(2*a);//formula to calculate root of x
                x2=-b-Math.sqrt(delta)/(2*a);//formula to calculate root of x
                console.log("The Root 1 of x is "+x1);
                console.log("The Root 2 of x is "+x2);
            }
        if(delta==0)//condition to check if delta is zero
            {
                x1=x2=-b/2*a;//imaginary part becomes zero
                console.log("The value of Root 1 and Root 2 in case of delta being zero is: "+x1);
            }
        if(delta<0)//condition to check if delta is negative
            {
                var realPart=-b/(2*a), imaginaryPart=Math.sqrt(-delta)/(2*a);
                console.log("The real part of the equation is: "+realPart+" and the imaginary part of the equation is: "+imaginaryPart);
            }
            
        },
/******************************************************************************************************/
        /**
         * @description windchill
         */
windChill: function(temp,wind)
    {  
        if(temp<=50 && wind<120 && wind>3) 
            {
             var effectiveTemp = (35.74+(0.6215*temp)+((0.4275*temp)-35.75))*(Math.pow(wind,0.16));//formula to find windchill
             console.log("The value of effetive temperature is: "+effectiveTemp);
            }
           else
           {
              console.log("Please enter valid values!!");
           }
      },
/****************************************************************************************************/
      /**
       * @description Permutation of the given value
       */
permutation: function(string)
      {
        var i=0;
        if(string>='a' && string<='z' || string>='A' && string<='Z') //check if the given value is a string or not
        {
          var permute=[]; //create a string to store the permuted string
          permutate(string,[]); //calling the permutate funnction
          console.log(permute); 
        }
        else
        {
          console.log("Invalid Input!! Please enter a string")
        }

function permutate(string,arr)
    {
      if(typeof(string)=='string') //check if the given value is in string type
      string=string.split(''); //convert the given string to array
      if(string.length==0) 
      permute.push(arr.join('')); //converts the array into a string
        for(var i=0;i<string.length;i++)
        {
            var x=string.splice(i,1); //selects a character from ith position
            arr.push(x); //pushes elements into the array from the last position
            permutate(string,arr); //calling the permutate function
            arr.pop(); //pop out elements of the array from the last position
            string.splice(i,0,x);
        }
      }
   },
}
/***************************************************************************************************/
