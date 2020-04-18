const algorithmia = require('algorithmia');
const readKey = require('../key//readkey.js');
const fs = require('fs');

const api_key = readKey;

var imgPath = 'data://hydroweaver/images/elephant-2.jpg';
let client = algorithmia.client(api_key);

//READ A FILE
/*client.file(imgPath).exists(function(exists) {
    console.log(exists);
    client.dir('data://.my/karan').create((response)=>{
    console.log(response);
});
});*/

client.file('data://.algo/deeplearning/ColorfulImageColorization/temp/851dcf96-791e-470b-8f99-90e0835097bc.png').get((err, data)=>{
    if(err){
        console.log('err');
    }
    else{
        var x = data;
        fs.writeFileSync('C://Users//karaverm//Downloads//nodejswip//algorithmia API Test/x.png', x);
    }

});

//CREATE A DIRECTORY