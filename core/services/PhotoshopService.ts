import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";
import axios from "axios";

export async function getAllPhotoshops() : Promise<any> {
  let photoshopResponse = await axios.get('https://api.sheety.co/97e05d2f-5aa5-4541-9473-6dbc249291a9');
  return Promise.resolve(photoshopResponse.data);
}

export async function getRandomPhotoshop(): Promise<ChatPostMessageArguments> {
  let photoshops = await getAllPhotoshops();
  let photoshop = getRandomElement(photoshops);

  return Promise.resolve({
    text: "",
    channel: "",
    attachments: [
      {
        image_url: photoshop.url,
        thumb_url: photoshop.url,
        text: photoshop.title,
        fallback: photoshop.title
      }
    ]
  });
}
