import getRandomElement from "../util/getRandomElement";

const tweets = require("../data/tweets.json");

export function getRandomTweet() {
  let tweetRecord = getRandomElement(tweets);
  return tweetRecord.tweet;
}
