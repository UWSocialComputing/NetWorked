/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const axios = require("axios");

exports.chatGPT = functions.https.onRequest(async (request, response) => {
  const prompt = request.body.prompt; // The user's prompt from our app

  try {
    const openAIResponse = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003", // Change the model if we want
          prompt: prompt,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // eslint-disable-next-line max-len
            "Authorization": `Bearer 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`,
          },
        },
    );
    response.json({reply: openAIResponse.data.choices[0].text});
  } catch (error) {
    console.error("OpenAI error:", error);
    response.status(500).send("Error communicating with OpenAI");
  }
});
