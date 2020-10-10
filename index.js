const http = require('http');
const url = require('url')

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    const parsedUrl = url.parse(req.url)
    
    res.end(JSON.stringify(parsedUrl));
}).listen(process.env.PORT || 8080 )
