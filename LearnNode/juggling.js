var fs = require('fs');

var URL1 = process.argv[2].toString();
var URL2 = process.argv[3].toString();
var URL3 = process.argv[4].toString();
var http = require("http");
var bl = require('bl');

var results = []
var count = 0;

var urlsArray = process.argv.slice(2);
var noOfUrls = urlsArray.length;


for (var i = 0; i < noOfUrls; i++) {

    httpGet(i)

    }


function printResults () {

    for (var i = 0; i < noOfUrls; i++) {

    console.log(results[i])

    }
}




function httpGet (index) {

    http.get(urlsArray[index], function (response) {

    response.pipe(bl(function (err, data) {

    if (err) {

    return console.error(err)

    }

    results[index] = data.toString()

    count++

    if (count === noOfUrls) {

    printResults()

    }

    }))

    })

    }





