import { ChatPostMessageArguments } from "@slack/web-api";
import markov from "markov";
let markovData = require("../../data/markov-data.json");

let markovChain = markov(2);

markovChain.seed(markovData.join("\n"), function() {
  console.log("Markov chain seeded successfully");
});

function getRandomNumber(upToInteger) {
  // minumum 3 word sentence
  return Math.floor(Math.random() * upToInteger) + 3;
}

export function getRandomSentence(slackText): ChatPostMessageArguments {
  return {
    text: markovChain.respond(slackText, getRandomNumber(15)).join(" "),
    channel: ""
  };
}
