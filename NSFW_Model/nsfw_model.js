// const tf = require('@tensorflow/tfjs');
// require('@tensorflow/tfjs-node');
// const {Image} = require('canvas');
// const path = require('path');
// const NSFW_CLASSES = 
// {
//     0: 'Drawing',
//     1: 'Hentai',
//     2: 'Neutral',
//     3: 'Porn',
//     4: 'Sexy'
// }
// async function PredictNSFW(model,img) 

// {const tensor = tf.browser.fromPixels(img,3);

//     console.log(tensor.data());
//     const normalized = tensor.toFloat().div(tf.scalar(255))

// let resized = normalized;
// if(tensor.shape[0]!==224 || tensor.shape[1]!==224)
// {
//     resized = tf.image.resizeBilinear(normalized,[224,224],true);
// }
// const tensor2 =resized.reshape([1,224,224,3]);
// const prediction = model.predict(tensor2);
// let predictionValues;
// await prediction.data().then(res => {predictionValues=res});

// const result = showPredictionResults(predictionValues);
// return result;
// }

// function showPredictionResults(prediction)
// {   console.log(prediction);
//     if(prediction[1]>0.75 || prediction[3]>0.75 || prediction[4]>0.9)
//     {
//         return true;
//     }
//     return false;
// }

// async function testImage(src)
// {
// console.log('Hi');
// let model;
// try{
// model = await tf.loadGraphModel('file://NSFW_Model/models/webModel/model.json');
// }
// catch(err)
// {
//     console.log(err);
// }
// if(!model)
// {
//     throw new Error('No model found');
// }
// image = await load(path.resolve(src));
// console.log(image);
// await PredictNSFW(model,image).then(res => {ans=res});

// return ans;
// }

// function load(url){
//     return new Promise((resolve, reject) => {
//       const im = new Image()
//           im.crossOrigin = 'anonymous'
//           im.src = url;
//           im.onload = () => {
//             resolve(im)
//           }
//      })
//   }
  
  
// module.exports = testImage;
