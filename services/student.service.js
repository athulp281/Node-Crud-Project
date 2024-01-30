const db = require("../db");

function getAllStudents(callback) {
    const sql = "SELECT * FROM student";
    db.query(sql, callback);
}

function createStudent(studentData, callback) {
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES ?";
    db.query(sql, [studentData], callback);
}

function updateStudent(id, studentData, callback) {
    const sql = "UPDATE student SET `Name` = ?, `Email` = ? WHERE ID = ?";
    db.query(sql, [...studentData, id], callback);
}

function deleteStudent(id, callback) {
    const sql = "DELETE FROM student WHERE ID = ?";
    db.query(sql, [id], callback);
}

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
};
