const express = require("express");
const app = express();
// bodyParser = require("body-parser");
require("express-async-errors");

const db = require("./db");
const bodyParser = require("body-parser");
let studentRoute = require("./routes/student.route");

//middleware
app.use(bodyParser.json());
app.use("student/", studentRoute);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send("something went wrong..");
});

db.query("SELECT 1")
    .then((data) => {
        console.log("connection done"),
            app.listen(8081, () => console.log("server started at 8081"));
    })
    .catch((err) => console.log("db connection failed \n" + err));
