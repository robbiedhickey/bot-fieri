import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";
import axios from "axios"

export async function getAllQuotes() : Promise<any> {
  let quoteResponse = await axios.get("https://api.sheety.co/eda206d7-5d8b-4543-841c-b17bba9109ce");
  console.log(quoteResponse.data[0]);
  return Promise.resolve(quoteResponse.data);
}

export async function getRandomQuote(): Promise<ChatPostMessageArguments> {
  let quotes = await getAllQuotes();
  let quoteRecord = getRandomElement(quotes);

  return Promise.resolve({
    text: `> ${quoteRecord.quote}`,
    channel: ""
  });
}
