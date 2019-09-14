import { NowRequest, NowResponse } from "@now/node";
import _ from "lodash";
import FieriBrain from "../core/FieriBrain";

export default async (request: NowRequest, response: NowResponse) => {
  console.log(`Processing request with body: ${JSON.stringify(request.body)}`);

  // handle challenge request for initial setup
  if (request.method == "POST" && request.body.challenge) {
    response.status(200).json({ challenge: request.body.challenge });
  }
  // ask the fieri brain
  else {
    let brain = new FieriBrain(request, response);
    await brain.takeMeToFlavortown();
  }
};
