import getRandomElement from "../util/getRandomElement";
import { ChatPostMessageArguments } from "@slack/web-api";

const tweets = require("../data/tweets.json");

const topNTweets = 200 || process.env.TOP_N_TWEETS;

const topTweets = tweets
  .sort((a, b) => a.likes_count < b.likes_count)
  .slice(0, topNTweets);

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
