import axios from "axios";
import { ChatPostMessageArguments } from "@slack/web-api";
import getRandomElement from "../../util/getRandomElement";

export async function getAllMemes() : Promise<any> {
  let memeResponse = await axios.get("https://api.sheety.co/e43a2efb-b367-4a85-ba73-1c3f51b316f1");
  return Promise.resolve(memeResponse.data);
}

export async function getRandomMeme(): Promise<ChatPostMessageArguments> {
  let memes = await getAllMemes();
  let meme = getRandomElement(memes);

  return Promise.resolve({
    text: "",
    channel: "",
    attachments: [
      {
        image_url: meme.url,
        thumb_url: meme.url,
        text: meme.title     
      }
    ]
  });
}
