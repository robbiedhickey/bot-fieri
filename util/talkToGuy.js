let markov = require("markov");
let fs = require("fs");
let util = require("util");

let markovChain = new markov(3);
let markovData = fs.readFileSync("data/markov-data.txt").toString();

markovChain.seed(markovData, function() {
  let stdin = process.openStdin();
  util.print("> ");

  stdin.on("data", function(line) {
    let res = markovChain.respond(line.toString(), 10).join(" ");
    console.log(res);
    util.print("> ");
  });
});
