const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.get("/students", studentController.getAllStudents);
router.post("/create", studentController.createStudent);
router.put("/update/:id", studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
