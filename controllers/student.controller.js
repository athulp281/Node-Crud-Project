const service = require("../services/student.service");

const getAllStudents = async (req, res) => {
    try {
        const students = await service.getAllStudents();
        res.send(students);
    } catch (error) {
        res.send(error.msg);
    }
};

module.exports = {
    getAllStudents,
};
