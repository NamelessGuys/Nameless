const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const {Image} = require('canvas');
const fs = require('fs');
const jpeg = require('jpeg-js');
const path = require('path');

const NSFW_CLASSES = 
{
    0: 'Drawing',
    1: 'Hentai',
    2: 'Neutral',
    3: 'Porn',
    4: 'Sexy'
}

const convert =  async (img) =>
{
var jpg = fs.readFileSync(img);    
const image = await jpeg.decode(jpg, {useTArray: true})

  const numChannels = 3
  const numPixels = image.width * image.height
  const values = new Int32Array(numPixels * numChannels)

  for (let i = 0; i < numPixels; i++)
    for (let c = 0; c < numChannels; ++c)
      values[i * numChannels + c] = image.data[i * 4 + c]

  return tf.tensor3d(values, [image.height, image.width, numChannels], 'int32')
}

async function PredictNSFW(model,filebuffer) 
{   
        
if(!filebuffer)
{
    console.log(filebuffer);
}
else{

    const tensor=await convert(filebuffer.path);
    const normalized = tensor.toFloat().div(tf.scalar(255))

    let resized = normalized;
    if(tensor.shape[0]!==224 || tensor.shape[1]!==224)
    {
        resized = tf.image.resizeBilinear(normalized,[224,224],true);
    }
    const tensor2 =resized.reshape([1,224,224,3]);
    const prediction = await model.predict(tensor2);
    const pred  = prediction.arraySync();
    if(pred[0][1]>0.75 || pred[0][3]>0.75 || pred[0][4]>0.9)
        {
            return true;
        }
        return false;
}
}


async function testImage(filebuffer)
{
let model;
try{
model = await tf.loadGraphModel('file://NSFW_Model/models/webModel/model.json');
}
catch(err)
{
    console.log(err);
}
if(!model)
{
    throw new Error('No model found');
}
await PredictNSFW(model,filebuffer).then(res => {ans=res});

return ans;
}



  
module.exports = testImage;
