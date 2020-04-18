const algorithmia = require('algorithmia');
const readKey = require('../key/readkey.js');
const fs = require('fs');
var colorizedFileLocation;

const api_key = readKey;

//input image path
var input_image_path = 'C://Users//karaverm//Downloads//nodejswip//algorithmia API Test//tiger.png';
var download_image_path = 'C://Users//karaverm//Downloads//nodejswip//algorithmia API Test';

//read binary file into buffer
var file_buffer = fs.readFileSync(input_image_path);

//create client
var client = algorithmia.client(api_key);
//get colorizer algo
function colorizer(){
    client.algo("algo://deeplearning/ColorfulImageColorization/1.1.13?timeout=300").pipe(file_buffer).then((output, err)=>{
        if(output){
            colorizedFileLocation = output.result;
            console.log('File stored at:', colorizedFileLocation.output);
            client.file(colorizedFileLocation.output).exists((exists)=>{
                if(exists){
                    client.file(colorizedFileLocation.output).get((error, data)=>{
                        if(error){
                            console.log('Fail to download file, check error logs');
                            console.error(error);
                        }
                        else{                
                            var colorizedFile = data;
                            var new_path = download_image_path + '//ColorizedImage' + Date.now() + '.png';
                            fs.writeFile(new_path, colorizedFile, ()=>{
                                console.log('File Downloaded Successfully at: ', new_path);
                            })
                        }
                    })
                }
            });
        }
        else{
            console.log(err);
        }
    });
}

var c = colorizer();
