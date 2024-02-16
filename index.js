const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/student.route");
const authRoutes = require("./routes/auth.route");
const sequelize = require("../backend/db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", studentRoutes);
app.use("/auth", authRoutes);

sequelize
    .sync()
    .then(() => {
        console.log("Database is connected");
        const PORT = process.env.PORT || 8081;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) =>
        console.error("Error connecting to the database:", error)
    );
