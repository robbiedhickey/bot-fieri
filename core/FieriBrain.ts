import { NowRequest, NowResponse } from "@now/node";
import _ from "lodash";
import { getRandomQuote } from "./QuoteService";
import { getRandomTweet } from "./TweetService";
import SlackClient from "./SlackClient";
import * as replyTypes from "./ReplyTypes";

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
    let responseText = "";

    switch (this.replyType) {
      case replyTypes.QUOTE:
        responseText = getRandomQuote();
        break;
      case replyTypes.TWEET:
        responseText = getRandomTweet();
        break;
    }

    if (this.channel) {
      console.log(`Sending slack message to channel ${this.channel}`);

      await SlackClient.chat.postMessage({
        channel: this.channel,
        text: responseText
      });
    }

    console.log(
      `Returning response of type ${this.replyType}: "${responseText}"`
    );

    this.response.status(200).send(responseText);
  }

  determineIntent(message) {
    if (message.match(/twitter|tweet|tweets|twit|tweeter/gi)) {
      return replyTypes.TWEET;
    }

    return replyTypes.QUOTE;
  }
}
