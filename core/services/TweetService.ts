import { ChatPostMessageArguments } from "@slack/web-api";
import _ from "lodash";
import getRandomElement from "../../util/getRandomElement";

const tweets = require("../../data/tweets.json");

const topNTweets = 100 || process.env.TOP_N_TWEETS;

const topTweets = _.orderBy(tweets, ["likes_count"], ["desc"])
  .slice(0, topNTweets);

export function getTopTweets() {
  return topTweets;
}

export function getRandomTweet(): ChatPostMessageArguments {
  let tweetRecord = getRandomElement(topTweets);

  let text = `${tweetRecord.tweet} \n\n *Gifted to humanity on ${tweetRecord.date}*  \n\n ${tweetRecord.link}`;
  let attachments = tweetRecord.photos.map(p => ({
    image_url: p,
    thumb_url: p,
    text: "twitter pic",
    fallback: "twitter pic"
  }));

  return {
    text,
    attachments,
    channel: ""
  };
}
