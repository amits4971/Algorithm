/* Exercise - This program prints list of files with given extension in the given directory.
  We import a module that perform the filtering task. */


var dirfilter = require('./makeItModular(module)');

dirfilter(process.argv[2],process.argv[3],function(err,data){
    if(err){
        console.log('Some error occured');
    }
    data.map(function(file){
        console.log(file);
    })
})
