import { topTweets } from "../../core/services/TweetService";

module.exports = (req, res) => {
  res.status(200).json(topTweets());
};
