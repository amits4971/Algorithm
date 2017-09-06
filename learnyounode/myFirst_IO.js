/* Perform synchronous file read operation.
 The filename is provided as first command-line argument.
*/

var fs = require('fs');

var data = fs.readFileSync(process.argv[2])

console.log((data.toString().split('\n').length - 1));
