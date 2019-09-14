import { getAllGifs } from "../core/services/GifService";

module.exports = (req, res) => {
  res.status(200).json(getAllGifs());
};
