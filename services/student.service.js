const Student = require("../models/student.model");

function getAllStudents() {
    return Student.findAll();
}

function createStudent(studentData) {
    return Student.create({
        Name: studentData[0],
        Email: studentData[1],
    });
}

function updateStudent(id, studentData) {
    return Student.update(
        {
            Name: studentData[0],
            Email: studentData[1],
        },
        {
            where: {
                id: id,
            },
        }
    );
}

function deleteStudent(id) {
    return Student.destroy({
        where: {
            id: id,
        },
    });
}

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
};
