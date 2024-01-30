const { db, sequelize } = require("../db");

exports.getAllStudents = async () => {
    const [records] = await db.query("SELECT * from student");
    console.log("records", records);
    return records;
};
