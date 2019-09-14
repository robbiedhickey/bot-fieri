import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";

// https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/
// "Guy Fieri Photoshops"
const photoshops = require("../../data/photoshops.json");

export function getAllPhotoshops() {
  return photoshops;
}

export function getRandomPhotoshop(): ChatPostMessageArguments {
  console.log(photoshops.length);
  let photoshop = getRandomElement(photoshops);

  return {
    text: "",
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
