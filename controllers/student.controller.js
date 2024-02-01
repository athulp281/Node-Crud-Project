const studentService = require("../services/student.service");
const Student = require("../models/student.model");

async function getAllStudents(req, res) {
    try {
        const students = await studentService.getAllStudents();
        return res.json(students);
    } catch (error) {
        return res.json("Error");
    }
}

async function createStudent(req, res) {
    const studentData = [req.body.Name, req.body.Email];
    const existingStudent = await Student.findOne({
        where: { Email: studentData[1] },
    });

    try {
        if (studentData.includes(null)) {
            return res.json("Error: Name and Email cannot be null");
        } else if (existingStudent) {
            return res.status(400).json("Error: Email already exists");
        } else {
            const newStudent = await studentService.createStudent(studentData);
            console.log("Database response:", newStudent);
            return res.json(newStudent);
        }
    } catch (error) {
        return res.json("Error");
    }
}

async function updateStudent(req, res) {
    const studentData = [req.body.Name, req.body.Email];
    const id = req.params.id;

    if (studentData.includes(null)) {
        return res.json("Error: Name and Email cannot be null");
    }

    try {
        const updatedStudent = await studentService.updateStudent(
            id,
            studentData
        );
        console.log("Database response:", updatedStudent);
        return res.json(updatedStudent);
    } catch (error) {
        return res.json("Error");
    }
}

async function deleteStudent(req, res) {
    const id = req.params.id;

    try {
        const deletedStudent = await studentService.deleteStudent(id);
        return res.json(deletedStudent);
    } catch (error) {
        return res.json("Error");
    }
}

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
};
