const { text } = require("express");
const fetch = require("node-fetch");
const Request = require("request");
const config = require("../utils/config.js");

async function topicTags() {
  const opt = {
    type: "application",
    appId: config.appId,
    appSecret: config.appSecret,
  };
  const authOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(opt),
  };

  const res = await fetch(
    "https://api.symbl.ai/oauth2/token:generate",
    authOptions
  );
  const data = await res.json();
  return data.accessToken;
}

async function getTopic(text) {
  const authToken = await topicTags();

  const payload = {
    messages: [
      {
        payload: {
          content: text,
          contentType: "text/plain",
        },
      },
    ],
  };

  const responses = {
    400: "Bad Request! Please refer docs for correct input fields.",
    401: "Unauthorized. Please generate a new access token.",
    404: "The conversation and/or it's metadata you asked could not be found, please check the input provided",
    429: "Maximum number of concurrent jobs reached. Please wait for some requests to complete.",
    500: "Something went wrong! Please contact support@symbl.ai",
  };

  const fetchData = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const res = await fetch(`https://api.symbl.ai/v1/process/text`, fetchData);
  const data = await res.json();
  const topic = await topicFind(data.conversationId);

  async function topicFind(conversationId) {
    const res = await fetch(
      `https://api.symbl.ai/v1/conversations/${conversationId}/topics`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
        json: true,
      }
    );
    const data = await res.json();
    return data;
  }
  return topic;
}
module.exports = getTopic;
