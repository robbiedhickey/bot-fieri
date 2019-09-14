import { WebClient } from "@slack/web-api";
import assert from "assert";

assert(
  process.env.SLACK_OAUTH_TOKEN,
  "The process must be initialized with the SLACK_OAUTH_TOKEN environment variable."
);

const token = process.env.SLACK_OAUTH_TOKEN;

const client = new WebClient(token);

export default client;
