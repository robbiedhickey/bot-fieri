import getRandomElement from "../util/getRandomElement";

const tweets = require("../data/tweets.json");

export function getRandomTweet() {
  let tweetRecord = getRandomElement(tweets);
  return `> ${tweetRecord.tweet} \n\n *Gifted to humanity on ${tweetRecord.date}*  \n\n ${tweetRecord.link}`;
}
