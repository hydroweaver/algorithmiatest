const algorithmia = require('algorithmia');
const readKey = require('../key//readkey.js');

const api_key = readKey;

var imgPath = 'data://hydroweaver/images/elephant-2.jpg';
let client = algorithmia.client(api_key);

//READ A FILE
client.file(imgPath).exists(function(exists) {
    console.log(exists);
    client.dir('data://.my/karan').create((response)=>{
    console.log(response);
});
});

//CREATE A DIRECTORY