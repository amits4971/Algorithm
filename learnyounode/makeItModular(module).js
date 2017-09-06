/* This is a module that filter the list of files with given extension name in 
 given directory.

The directory name and file extension is provided as argument to the module.
*/

var fs = require('fs');
var path = require('path');

module.exports = function(dirName,ext,callback){
    var exten = '.' + ext;
    fs.readdir(dirName,function(err,data){
        if(err) return callback(err);
        data = data.filter(function(file){
            return (path.extname(file) === exten)
        });
        callback(null,data);
    })
}

