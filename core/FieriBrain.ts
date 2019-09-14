import { NowRequest, NowResponse } from "@now/node";
import _ from "lodash";
import { getRandomQuote } from "./services/QuoteService";
import { getRandomTweet } from "./services/TweetService";
import { getRandomPhotoshop } from "./services/PhotoshopService";
import { getRandomMeme } from "./services/MemeService";
import { getRandomGif } from "./services/GifService";
import { getHelp } from "./services/HelpService";
import { getRandomSentence } from "./services/MarkovChainService";
import SlackClient from "./SlackClient";
import * as types from "./Types";

export default class FieriBrain {
  request: NowRequest;
  response: NowResponse;
  channel: string;
  messageText: string;
  sentByUser: string;
  replyType: string;

  constructor(request: NowRequest, response: NowResponse) {
    this.request = request;
    this.response = response;
    this.channel = _.get(request, "body.event.channel");
    this.messageText =
      _.get(request, "body.event.text") || _.get(request, "query.text");
    this.sentByUser = _.get(request, "body.event.user");
    this.replyType = this.determineIntent(this.messageText || "");
  }

  async takeMeToFlavortown() {
    let response = { text: "", channel: "" };

    switch (this.replyType) {
      case types.MARKOVCHAIN:
        response = getRandomSentence(this.messageText);
        break;
      case types.HELP:
        response = getHelp();
        break;
      case types.PHOTOSHOP:
        response = await getRandomPhotoshop();
        break;
      case types.MEME:
        response = await getRandomMeme();
        break;
      case types.GIF:
        response = await getRandomGif();
        break;
      case types.QUOTE:
        response = await getRandomQuote();
        break;
      case types.TWEET:
        response = getRandomTweet();
        break;
    }

    if (this.channel) {
      console.log(`Sending slack message to channel ${this.channel}`);

      response = Object.assign({}, response, {
        channel: this.channel,
        unfurl_links: true,
        unfurl_media: true
      });

      await SlackClient.chat.postMessage(response);
    }

    console.log(
      `Returning response of type ${this.replyType}: "${JSON.stringify(
        response
      )}"`
    );

    this.response.status(200).send(response);
  }

  determineIntent(message) {
    if (message.match(/help/gi)) {
      return types.HELP;
    }

    if (message.match(/shop|photoshop|face|transplant/gi)) {
      return types.PHOTOSHOP;
    }

    if (message.match(/meme/gi)) {
      return types.MEME;
    }

    if (message.match(/gif/gi)) {
      return types.GIF;
    }

    if (message.match(/twitter|tweet|tweets|twit|tweeter/gi)) {
      return types.TWEET;
    }

    if (message.match(/markov|chain/gi)) {
      return types.MARKOVCHAIN;
    }

    return types.QUOTE;
  }
}
