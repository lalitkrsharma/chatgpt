const express = require("express");
const OPENAI_API_KEY = "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";
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());

app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
  });
});
app.get("/message", (req, res) => {
  const question = req.body.message;

  openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: "Answer as if you are 'AISHA' that stands for 'Artificially Intelligent Super Helpful Assistant' and is designed to assist student and admission seeker of Arka Jain University by a group of students who named themselves AI Forge. The website for the university is 'arkajainuniversity.ac.in' ",question,
      max_tokens: 4000,
      temperature: 0,
    })
    .then((response) => {
      console.log({ response });
      return response?.data?.choices?.[0]?.text;
    })
    .then((answer) => {
      console.log({ answer });
      const array = answer
        ?.split("\n")
        .filter((value) => value)
        .map((value) => value.trim());

      return array;
    })
    .then((answer) => {
      res.json({
        answer: answer,
        prompt: question,
      });
    });
  console.log({ question });
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
