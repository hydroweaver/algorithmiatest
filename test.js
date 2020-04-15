const http = require('http');

var dat = [];

http.createServer((request, reponse)=>{
    request.on('error', (error)=>{
        console.error(error);
    }).on('data', (data)=>{
        dat.push(data);
    }).on('end', ()=>{
        reponse.end('HELLO WORLD!');
    });
}).listen(8080);