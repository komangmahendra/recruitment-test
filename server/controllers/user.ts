import { User } from "../models/index";

class UserController {
  static register(req, res, next) {
    const {
      email = null,
      firstName = null,
      lastName = null,
      dateOfBirth,
      gender,
      mobileNumber,
    } = req.body;

    User.create({
      email,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      mobileNumber,
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}

export default UserController;
