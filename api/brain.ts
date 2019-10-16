import { NowRequest, NowResponse } from "@now/node";
import _ from "lodash";
import FieriBrain from "../core/FieriBrain";

export default async (request: NowRequest, response: NowResponse) => {
  console.log(`Processing request with body: ${JSON.stringify(request.body)}`);
  console.log(`Request headers: ${JSON.stringify(request.headers)}`)

  // handle challenge request for initial setup
  if (request.method == "POST" && request.body.challenge) {
    response.status(200).json({ challenge: request.body.challenge });
    return;
  }

  // ask the fieri brain
  let isRetry = Boolean(request.headers["x-slack-retry-num"]);

  if(!isRetry) {
    let brain = new FieriBrain(request, response);
    await brain.takeMeToFlavortown();
  }

  response.status(200).end(JSON.stringify({ok: true}));

  console.log("Request complete.");
};
