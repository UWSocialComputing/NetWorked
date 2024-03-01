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
            max_tokens: 100, // Reduced to avoid 429s I guess
            stop: ["2."] // Stop sequence to avoid unnecessary gen, to avoid 429s
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
