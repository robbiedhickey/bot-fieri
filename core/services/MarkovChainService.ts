import { ChatPostMessageArguments } from "@slack/web-api";
import markov from "markov";
let markovData = require("../../data/markov-data.json");

let markovChain = markov(1);

markovChain.seed(markovData.join("\n"), function() {
  console.log("Markov chain seeded successfully");
});

export function getRandomSentence(slackText): ChatPostMessageArguments {
  return {
    text: markovChain.respond(slackText, 5).join(" "),
    channel: ""
  };
}
