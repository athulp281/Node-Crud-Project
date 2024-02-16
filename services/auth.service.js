const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

async function loginUser(username, password) {
    const user = await User.findOne({ where: { username } });
    if (!user) throw new Error("User not found");

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error("Invalid credentials");

    const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET
    );
    return { user, token };
}

module.exports = {
    loginUser,
};
