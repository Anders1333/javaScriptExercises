var fs = require('fs')
returnstring = fs.readFileSync(process.argv[2]).toString()

var newarray = returnstring.split('\n')

var amountoflines = newarray.length - 1

console.log(amountoflines)
