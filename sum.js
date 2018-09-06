var prompt = require('prompt-sync')();
var utility =require('../Utility/utility.js');

function sum()
{
    var no = prompt("Enter the number of elements: ");
    utility.sum(no);
}
sum();
