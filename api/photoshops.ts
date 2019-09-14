import { getAllPhotoshops } from "../core/services/PhotoshopService";

module.exports = (req, res) => {
  res.status(200).json(getAllPhotoshops());
};
