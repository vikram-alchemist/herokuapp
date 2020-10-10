var http = require('http');

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200, {'Content-Type': 'application/json'});
    //res.write('Hello World!');
    res.end(JSON.stringify({
        name: "Viram"
    }));
}).listen(process.env.PORT || 8080 )