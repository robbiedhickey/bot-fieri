import { topTweets } from "../../core/services/TweetServices";

module.exports = (req, res) => {
  res.status(200).json(topTweets());
};
