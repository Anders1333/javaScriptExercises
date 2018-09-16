var fs = require('fs');

var URL = process.argv[2].toString();
var http = require("http");

http.get(URL,processStream)


function processStream(response){

    response.setEncoding("utf8");

    response.on("data",function(data){
    console.log(data)
    })

    response.on("error",function(error){
        console.log(error)

    })

    response.on("end",function(end){
        return;

    })


}