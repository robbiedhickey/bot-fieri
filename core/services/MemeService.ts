import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";

// https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/
// "Guy Fieri Memes"
const memes = require("../../data/memes.json");

export function getAllMemes() {
  return memes;
}

export function getRandomMeme(): ChatPostMessageArguments {
  let meme = getRandomElement(memes);

  return {
    text: "",
    channel: "",
    attachments: [
      {
        image_url: meme.contentUrl,
        thumb_url: meme.thumbnailUrl,
        text: meme.name,
        fallback: meme.hostPageDisplayUrl
      }
    ]
  };
}
