import getRandomElement from "../util/getRandomElement";

const quotes = require("./quotes.json");

export function getAllQuotes() {
  return quotes;
}

export function getRandomQuote() {
  return getRandomElement(quotes);
}
