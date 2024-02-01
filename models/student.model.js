const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Student = sequelize.define("Student", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Student;
