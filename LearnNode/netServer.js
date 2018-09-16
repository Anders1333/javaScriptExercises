var net = require('net')
var port = process.argv[2].toString();

var server = net.createServer(function (socket) {

    var date = new Date();
    var data = [];

data.push(date.getFullYear())
data.push(date.getMonth()+1)
data.push(date.getDate())
data.push(date.getHours())
data.push(date.getMinutes())
  
console.log(data)

    socket.write(data)
    socket.end();
})
server.listen(port)