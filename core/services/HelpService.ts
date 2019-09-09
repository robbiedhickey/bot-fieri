import getRandomElement from "../../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";

export function getHelp(): ChatPostMessageArguments {
  return {
    text: `This is gangsta, hoss! Fire me a message and I'll send you a quote, gif, meme, tweet or righteous photoshop/face transplant. I'll try to guess your intent but if it doesn't work out, don't hate the playa hate the game.`,
    channel: ""
  };
}
