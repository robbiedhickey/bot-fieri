import { NowRequest, NowResponse } from "@now/node";
import _ from "lodash";
import { getRandomQuote } from "../data/QuoteService";
import SlackClient from "./SlackClient";

export default class FieriBrain {
  request: NowRequest;
  response: NowResponse;
  channel: string;
  messageText: string;
  sentByUser: string;

  constructor(request: NowRequest, response: NowResponse) {
    this.request = request;
    this.response = response;
    this.channel = _.get(request, "body.event.channel");
    this.messageText = _.get(request, "body.event.text");
    this.sentByUser = _.get(request, "body.event.user");
  }

  async takeMeToFlavortown() {
    let quote = getRandomQuote();

    if (this.channel) {
      console.log(`Sending slack message to channel ${this.channel}`);

      await SlackClient.chat.postMessage({
        channel: this.channel,
        text: `> ${quote}`
      });
    }

    console.log(`Returning quote "${quote}"`);
    this.response.status(200).send(quote);
  }
}
