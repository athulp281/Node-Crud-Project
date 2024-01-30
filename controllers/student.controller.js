const studentService = require("../services/student.service");

function getAllStudents(req, res) {
    studentService.getAllStudents((err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
}

function createStudent(req, res) {
    const studentData = [req.body.Name, req.body.Email];

    if (studentData.includes(null)) {
        return res.json("Error: Name and Email cannot be null");
    }

    studentService.createStudent([studentData], (err, data) => {
        console.log("Database response:", data);
        return res.json(data);
    });
}

function updateStudent(req, res) {
    const studentData = [req.body.Name, req.body.Email];
    const id = req.params.id;

    if (studentData.includes(null)) {
        return res.json("Error: Name and Email cannot be null");
    }

    studentService.updateStudent(id, studentData, (err, data) => {
        console.log("Database response:", data);
        return res.json(data);
    });
}

function deleteStudent(req, res) {
    const id = req.params.id;

    studentService.deleteStudent(id, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
}

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
};
