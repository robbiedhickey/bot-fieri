import _ from "lodash";
import SlackClient from "../core/SlackClient";

// posts spaghet to slack when someone creates a bug
module.exports = async (req, res) => {
  console.log(`Received request with body: ${JSON.stringify(req.body)}`);

  let bugSummary = _.get(req.body, "message.text");
  let createdByAkbar = bugSummary && bugSummary.match(/akbar/gi);

  if (createdByAkbar) {
    await SlackClient.chat.postMessage({
      channel: "CMR5KT4KW",
      text: `${bugSummary} \n\n https://www.youtube.com/watch?v=cE1FrqheQNI`,
      unfurl_links: true,
      unforl_media: true,
      username: "SNACKBAR"
    });
  }

  res.status(200).json({ status: "OK" });
};
