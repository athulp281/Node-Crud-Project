const express = require("express");
const { getAllStudents } = require("../controllers/student.controller");
router = express.Router();

router.get("/", getAllStudents);

module.exports = router;
