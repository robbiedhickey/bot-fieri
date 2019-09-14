import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";

// https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/
// "Guy Fieri Gifs"
const gifs = require("../../data/gifs.json");

export function getAllGifs() {
  return gifs;
}

export function getRandomGif(): ChatPostMessageArguments {
  let gif = getRandomElement(gifs);

  return {
    text: "",
    channel: "",
    attachments: [
      {
        image_url: gif.contentUrl,
        thumb_url: gif.thumbnailUrl,
        text: gif.name,
        fallback: gif.hostPageDisplayUrl
      }
    ]
  };
}
