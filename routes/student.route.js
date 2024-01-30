const express = require("express");
const router = express.Router();
const student = require("../controllers/student.controller");

router.get("/", student.getAllStudents);
router.post("/create", student.createStudent);
router.put("/update/:id", student.updateStudent);
router.delete("/delete/:id", student.deleteStudent);

module.exports = router;
