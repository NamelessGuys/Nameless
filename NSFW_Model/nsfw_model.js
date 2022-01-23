const tf = require('@tensorflow/tfjs');
const path = require('path');
const NSFW_CLASSES = 
{
    0: 'Drawing',
    1: 'Hentai',
    2: 'Neutral',
    3: 'Porn',
    4: 'Sexy'
}
async function PredictNSFW(model) 

{const tensor = tf.browser.fromPixels(img,3);

    console.log(tensor.data());
    const normalized = tensor.toFloat().div(tf.scalar(255))

let resized = normalized;
if(tensor.shape[0]!==224 || tensor.shape[1]!==224)
{
    resized = tf.image.resizeBilinear(normalized,[224,224],true);
}
const tensor2 =resized.reshape([1,224,224,3]);
const prediction = model.predict(tensor2);
let predictionValues;
await prediction.data().then(res => {predictionValues=res});

const result = showPredictionResults(predictionValues);
return result;
}

function showPredictionResults(prediction)
{   
    if(prediction[1]>0.75 || prediction[3]>0.75 || prediction[4]>0.9)
    {
        return true;
    }
    return false;
}

async function testImage(src)
{
console.log(path.resolve('models/web_model/model.json'));
// const model = await tf.loadGraphModel(path.resolve('models/web_model/model.json'));
const img = new Image();
img.crossOrigin = "anonymous";
let ans=false;
console.log(path.resolve(src));
img.src = path.resolve(src);
// img.onload = await PredictNSFW(model).then(res => {ans=res});

return ans;
}

module.exports = testImage;
