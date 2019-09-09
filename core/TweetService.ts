import getRandomElement from "../util/getRandomElement";

const tweets = require("../data/tweets.json");

const topNTweets = 200 || process.env.TOP_N_TWEETS;

const topTweets = tweets
  .sort((a, b) => a.likes_count < b.likes_count)
  .slice(0, topNTweets);

export function getRandomTweet() {
  let tweetRecord = getRandomElement(topTweets);
  return `> ${tweetRecord.tweet} \n\n *Gifted to humanity on ${tweetRecord.date}*  \n\n ${tweetRecord.link}`;
}
