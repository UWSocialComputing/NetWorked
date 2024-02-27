// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */
//
// const functions = require("firebase-functions");
// const axios = require("axios");
// const cors = require("cors")({origin: true});
//
// exports.chatGPT = functions.https.onRequest((request, response) => {
//   cors(request, response, async () => {
//     const prompt = request.body.prompt; // The user's prompt from our app
//
//     const openAIKey = functions.config().openai.key;
//
//     try {
//       const openAIResponse = await axios.post(
//           "https://api.openai.com/v1/completions",
//           {
//             model: "gpt-3.5-turbo-instruct",
//             prompt: prompt,
//             max_tokens: 150,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               // eslint-disable-next-line max-len
//               "Authorization": `Bearer ${openAIKey}`,
//             },
//           },
//       );
//       response.json({reply: openAIResponse.data.choices[0].text});
//     } catch (error) {
//       console.error("OpenAI error:", error.message);
//
//       // Check if the error response exists and log detailed information
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error("Error response status:", error.response.status);
//         console.error("Error response data:", error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error("Error request:", error.request);
//       } else {
//    // Something happened in setting up the request that triggered an error
//         console.error("Error message:", error.message);
//       }
//
//
//       response.status(500).send("Error communicating with OpenAI");
//     }
//   });
// });

const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({origin: true});

// Initialize a simple cache
const cache = {};

exports.chatGPT = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const prompt = request.body.prompt; // The user's prompt from our app

    // Check cache first
    if (cache[prompt]) {
      console.log("Serving from cache");
      return response.json({reply: cache[prompt]});
    }

    const openAIKey = functions.config().openai.key;

    try {
      const openAIResponse = await axios.post(
          "https://api.openai.com/v1/completions",
          {
            model: "gpt-3.5-turbo-instruct", // Update model name if necessary
            prompt: prompt,
            max_tokens: 150,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${openAIKey}`,
            },
          },
      );

      // Cache the response
      const replyText = openAIResponse.data.choices[0].text;
      cache[prompt] = replyText;

      response.json({reply: replyText});
    } catch (error) {
      console.error("OpenAI error:", error.message);

      if (error.response) {
        console.error("Error response status:", error.response.status);
        console.error("Error response data:", error.response.data);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }

      response.status(500).send("Error communicating with OpenAI");
    }
  });
});
