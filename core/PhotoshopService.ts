import getRandomElement from "../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";

// https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/
const photoshops = require("../data/photoshops.json");

export function getAllPhotoShops() {
  return photoshops;
}

export function getRandomPhotoshop(): ChatPostMessageArguments {
  let photoshop = getRandomElement(photoshops);

  return {
    text: `> ${photoshop.name}`,
    channel: "",
    attachments: [
      {
        image_url: photoshop.contentUrl,
        thumb_url: photoshop.thumbnailUrl,
        text: photoshop.name,
        fallback: photoshop.hostPageDisplayUrl
      }
    ]
  };
}
