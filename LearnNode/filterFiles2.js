var fs = require('fs')
var path = require('path')
var folder = process.argv[2].toString();
var ext = process.argv[3].toString();
const readDirFiltered = require('./filterFiles');


var files = readDirFiltered(folder,ext,(err,data)=>{
    if(err){
        throw new Error('upsie')
    }
    console.log(data)
})
