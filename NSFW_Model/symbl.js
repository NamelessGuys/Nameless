
const { text } = require('express');
const fetch = require('node-fetch');
const request = require('request');

// const appId = '4b6e6978547755587a3957324c556a71686e7a745933536b684d5756504a6c62';
// const appSecret = '6d4a6e306831525a635a6d435734375f4b546c636e774f455a416875655f74316e304a486d5257504b582d63304750736930566a76656a6c346b324131514a32';
// let auth;
// const authOptions = {
//   method: 'post',
//   url: "https://api.symbl.ai/oauth2/token:generate",
//   body: {
//     type: "application",
//     appId: appId,
//     appSecret: appSecret
//   },
//   json: true
// };

// request(authOptions, (err, res, body) => {
//   if (err) {
//     console.error('error posting json: ', err);
//     throw err
//   }

//   console.log(JSON.stringify(body, null, 2).accessToken);
// });

async function getTopic(text)
{
  let txt;
const authToken= "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjYzMzI1ODExODExMjg3MDQiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiS25peFR3VVh6OVcyTFVqcWhuenRZM1NraE1XVlBKbGJAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjQ3MTE4OTU5LCJleHAiOjE2NDcyMDUzNTksImF6cCI6IktuaXhUd1VYejlXMkxVanFobnp0WTNTa2hNV1ZQSmxiIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.kw3jXFAgbVAMmFStrEzwVLb0UmXoX_pcAM7xAIZUEfkN8xZsltmDFXYyhA5cCJn6qIQJc9_LSX8JksdjXSqmsVOLVubnDAsG4uybfInkV7zCXYTvjoOV6P87qeWm2Ga492tga7SBTwsw6kTwjKD2sNlWMMmnk8OEEw0ugN0cSbtHyQQoUzY28-Os942rv7fc0ozKZhfgfwy4V5jO2ZLrH12otJrU7JIGKccsGFGSFRYaseG_qN5jNYBOk10MueRt2d0q4Gk4AzVJ0HueLpN-xH_J-Gv-xvELCGJ6BnLIPmy8zn0nChFBbyjKxytiMWurBOnzivjJoHAi7MnOP767MA";

const payload = {
  "messages": [
    {

      "payload": {
        "content": text,
         "contentType": "text/plain"
      },
    }
  ]
}

const responses = {
  400: 'Bad Request! Please refer docs for correct input fields.',
  401: 'Unauthorized. Please generate a new access token.',
  404: 'The conversation and/or it\'s metadata you asked could not be found, please check the input provided',
  429: 'Maximum number of concurrent jobs reached. Please wait for some requests to complete.',
  500: 'Something went wrong! Please contact support@symbl.ai'
}

const fetchData = {
  method: "POST",
  headers: {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
}

const res = await fetch(`https://api.symbl.ai/v1/process/text`, fetchData);
const data = await res.json();
console.log(data);
const topic = await topicFind(data.conversationId);
return topic;

async function topicFind(conversationId)
{ let bdy;
  const res = await fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/topics`,
    {
    headers: { 'Authorization': `Bearer ${authToken}` },
    json: true,
    }, 
  
);
const data = await res.json();

return data;
}
}
module.exports = getTopic;