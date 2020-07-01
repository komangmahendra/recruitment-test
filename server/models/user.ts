import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Email cannot be empty",
        },

        isUnique: function (email, done) {
          User.findOne({ where: { email } })
            .then((user) => {
              if (user) done(new Error("User already registered"));
            })
            .catch((error) => {
              done(error.message);
            })
            .finally(() => {
              done();
            });
        },
      },
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Mobile number cannot be empty",
        },

        isUnique: function (mobileNumber, done) {
          User.findOne({ where: { mobileNumber } })
            .then((user) => {
              if (user) done(new Error("Mobile number already registered"));
            })
            .catch((error) => {
              done(error.message);
            })
            .finally(() => {
              done();
            });
        },
        isValidFormat: function (phoneNumber, done) {
          let re = RegExp("\\+?([ -]?\\d+)+|\\(\\d+\\)([ -]\\d+)", "g");

          if (re.test(phoneNumber)) {
            done();
          } else {
            done(new Error("Invalid Phone Number Format"));
          }
        },
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    gender: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  return User;
};
