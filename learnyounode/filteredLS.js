/* In this exersice we have to print the name of files with given extension in a given directory.
 The file extension and directory name will be provided through commandline argument. */

var fs = require('fs');
var path = require('path'); 

fs.readdir(process.argv[2], function (err, data) {
    if (err) throw err;
    var exten = '.' + process.argv[3];
    data.map(function(filename){
        if(path.extname(filename) === exten)
            console.log(''+filename.toString()+'');
    })
});
