module.exports = (req, res) => {
  console.log(`Received request with body: ${JSON.stringify(req.body)}`);
  res.status(200).json({ status: "OK" });
};
