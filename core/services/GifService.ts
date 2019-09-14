import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";
import axios from "axios";

export async function getAllGifs() : Promise<any> {
  let gifResponse = await axios.get("https://api.sheety.co/98fd0809-53a7-4ac0-9061-37b10a72619a");
  return Promise.resolve(gifResponse.data);
}

export async function getRandomGif(): Promise<ChatPostMessageArguments> {
  let gifs = await getAllGifs();
  let gif = getRandomElement(gifs);

  return Promise.resolve({
    text: "",
    channel: "",
    attachments: [
      {
        image_url: gif.url,
        thumb_url: gif.url,
        text: gif.title,
        fallback: gif.title
      }
    ]
  });
}
