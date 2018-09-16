var fs = require('fs');

var URL = process.argv[2].toString();
var http = require("http");
const BufferList = require('bl')
var bl = new BufferList()


http.get(URL,processStream)



function processStream(response){

    response.setEncoding("utf8");

    response.on("data",function(data){
    bl.append(new Buffer.from(data))
   
    })

    response.on("error",function(error){
        console.log(error)

    })

    response.on("end",function(end){
       characters = bl.toString().split("");
        console.log(characters.length);
        console.log(bl.toString())

    })


}