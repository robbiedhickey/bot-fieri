const fs = require("fs");
const tweets = require("../data/tweets.json");

const cleanedTweets = tweets
  .filter(
    tweetRecord =>
      tweetRecord.mentions.length === 0 &&
      tweetRecord.hashtags.length === 0 &&
      tweetRecord.video === 0 &&
      !tweetRecord.tweet.includes("@")
  )
  .map(tweetRecord => {
    let tweet = tweetRecord.tweet;

    // strip urls
    tweet = tweet.replace(
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi,
      ""
    );

    // strip twitter ellipsis after photo embeds
    tweet = tweet.replace("…", "");

    // strip whitespace
    tweet = tweet.trim();

    // strip prefix dash
    tweet = tweet.replace(/^-/g, "");

    // strip again after dash is removed
    return tweet.trim();
  })
  .filter(tweet => tweet.length > 1);

fs.writeFileSync("data/markov-data.json", JSON.stringify(cleanedTweets));
