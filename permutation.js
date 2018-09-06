var prompt = require('prompt-sync')();
var utility =require('../Utility/utility.js');

function permutation()
{
    var string = prompt("Enter value to permute: ");
          utility.permutation(string);
}
permutation();
