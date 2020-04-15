const algorithmia = require('algorithmia');
const readKey = require('../key//readkey.js');
const fs = require('fs');
var colorizedFileLocation;
var colorizedFile = [];

const api_key = readKey;

//input image path
var input_image_path = 'C://Users//karaverm//Downloads//nodejswip//algorithmia API Test//water.png';

//read binary file into buffer
var file_buffer = fs.readFileSync(input_image_path);

//create client
var client = algorithmia.client(api_key);
//get colorizer algo
function colorizer(){
    client.algo("algo://deeplearning/ColorfulImageColorization/1.1.13?timeout=300").pipe(file_buffer).then((output, err)=>{
        if(output){
            colorizedFileLocation = output.result;
            console.log('Colorized File:', colorizedFileLocation.output);
        }
        else{
            console.log(err);
        }
    });

    /*await client.file(colorizedFileLocation.output.toString()).exists().then(async (val)=>{
        if(val){
            await client.file(colorizedFileLocation.output.toString()).get((err, data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            });
        }
    }).catch((err)=>{
        console.log(err);
    });*/
}

var c = colorizer();
/*
//get file await
getFile(c);

//Write file to disk
var file_extension = Date.now();
console.log(colorizedFile);
fs.writeFileSync('C://Users//karaverm//Downloads//nodejswip//algorithmia API Test//${file_extension}.png');
*/