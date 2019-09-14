import { getAllMemes } from "../core/services/MemeService";

module.exports = async (req, res) => {
  res.status(200).json(await getAllMemes());
};
