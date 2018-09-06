var prompt = require('prompt-sync')();
var utility =require('../Utility/utility.js');

function array()
{
    var row = prompt("Enter the number of rows: ");
    utility.array(row);
}
array();
