const http = require('http');
const url = require('url')

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    const parsedUrl = url.parse(req.url)
    const param = parsedUrl.query.split('=')[0]
    const email = parsedUrl.query.split('=')[1]
    
    if(param === 'email'){
        const data = {
            'jonsmith@example.com': {"email":"jonsmith@example.com","first_name":"Jon","last_name":"Smith","description":"Lorem Ipsum Dolor","address":"123 Chocolate Ave","phone_numbers":["2125551234","2125551235","2125551236"],"relatives":["Jane Smith","Doe Smith"]},
            'janesmith@example.com' : {"email":"janesmith@example.com","first_name":"Jane","last_name":"Smith","description":"Lorem Ipsum Dolor","address":"123 Chocolate Ave","phone_numbers":["2125551234","2125551235","2125551236"],"relatives":["Jon Smith","Doe Smith"]},
            'doesmith@example.com' : {"email":"doesmith@example.com","first_name":"Dow","last_name":"Smith","description":"Lorem Ipsum Dolor","address":"123 Chocolate Ave","phone_numbers":["2125551234","2125551235","2125551236"],"relatives":["Jane Smith","Jon Smith"]}
        }[email]
        
        res.end(JSON.stringify(data));
    }else{
        res.end(JSON.stringify([]));
    }
}).listen(process.env.PORT || 8080 )
