import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";

const quotes = require("../../data/quotes.json");

export function getAllQuotes() {
  return quotes;
}

export function getRandomQuote(): ChatPostMessageArguments {
  let quote = getRandomElement(quotes);

  return {
    text: `> ${quote}`,
    channel: ""
  };
}
