import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

dotenv.config(); // Loads environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing JSON requests

app.post("/get-bot-response", async (req, res) => {
  const { userInput } = req.body; // Extract user input from the request body

  if (!userInput) {
    return res.status(400).json({ error: "userInput is required" });
  }

  try {
    // Request to external chatbot API (adjust URL as necessary)
    const response = await axios.post(
      'https://iiced-mixtral-46-7b-fastapi.hf.space/generate/',
      {
        prompt: userInput,
        history: [],
        system_prompt: 'Generate a response for the question given. Provide a concise answer and don\'t say anything else',
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const botMessage = { text: response.data.response, sender: 'bot' };
    res.json({ botMessage });
  } catch (error) {
    console.error("Error fetching response:", error);
    res.status(500).json({ botMessage: "Sorry, I couldn't fetch a response." });
  }
});

app.listen(4000, () => console.log("AI server started on http://localhost:4000"));
