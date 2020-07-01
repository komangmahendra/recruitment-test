import { Status } from "../types/status";

export default (error, req, res, next) => {
  if (error.name === "SequelizeValidationError") {
    res.status(400).json({ status: Status.INVALID, message: error.message });
  } else {
    res.status(500).json({ status: Status.INTERNAL, message: error.message });
  }
};
