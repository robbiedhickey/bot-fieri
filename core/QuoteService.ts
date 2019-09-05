import getRandomElement from "../util/getRandomElement";

const quotes = require("../data/quotes.json");

export function getAllQuotes() {
  return quotes;
}

export function getRandomQuote() {
  let quote = getRandomElement(quotes);
  return `> ${quote}`;
}
