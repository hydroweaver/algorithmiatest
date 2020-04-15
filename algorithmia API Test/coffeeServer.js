const http = require('http');
const fs = require('fs');

let coffeePath = 'C://Users//karaverm//Downloads//nodejswip//algorithmia API Test//coffee.jpg';

http.createServer((request, response)=>{
    request.on('error', (err)=>{
        console.error(err);
    }).on('data', (data)=>{
        //
    }).on('end', ()=>{
        fs.readFile(coffeePath, (err, data)=>{
            if(err){
                console.log(err);
            }
            //got solution from https://wanago.io/2018/11/05/cors-cross-origin-resource-sharing/
            response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
            //response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            response.write(data);
            response.end();
        });
    });
}).listen(8080);