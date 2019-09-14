import { getAllMemes } from "../core/services/MemeService";

module.exports = (req, res) => {
  res.status(200).json(getAllMemes());
};
