# Welcome to Flavortown

This repository is the API portion of a Guy Fieri slack app.

## Setup

To get started with deploying this API on Now, you can use the [Now CLI](https://zeit.co/download):

```shell
$ npm i -g now
```

You will also need to create a local `.env` file that includes the `SLACK_OAUTH_TOKEN` variable.

```bash
SLACK_OAUTH_TOKEN="xoxb-..."
```

Once this is created, you can use the `now` cli to spin up a local development server:

```bash
$ now dev
```

## Deploying this Example

You can deploy the example with just a single command:

```shell
$ now
```
