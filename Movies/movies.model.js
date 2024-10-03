const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/config");

const Movies = sequelize.define(
  "Movies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  { timestamps: true, createdAt: true, updatedAt: true, tableName: "Movies" }
);

const UsersPreferences = sequelize.define("UserPreferences", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

module.exports = { Movies, UsersPreferences};
