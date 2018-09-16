


var fs = require('fs')
var path = require('path')

var readDirFiltered = function(dir,ext,cb){
    fs.readdir(dir, function (err, files) {
      if (err){
          cb(err);
      }
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          cb(null,files);
        }
      })
    }) }

    module.exports.readDirFiltered;