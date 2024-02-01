const authService = require("../services/auth.service");
const user = require("../models/user.model");

async function userLogin(req, res) {
    const userData = [req.body.username, req.body.password];
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
