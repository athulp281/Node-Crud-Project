const mysql = require("mysql2/promise");
const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("employee_db", "root", "root", {
//     host: "localhost",
//     dialect: "mysql", // Use the appropriate dialect for your database
// });
const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});

module.exports = mysqlPool;
