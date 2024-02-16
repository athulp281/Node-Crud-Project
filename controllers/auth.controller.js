const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

async function signup(req, res) {
    const { username, password } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            throw new Error("Username already exists");
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user record
        const newUser = await User.create({
            username,
            password: hashedPassword,
        });

        // Respond with success message or user data
        res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    } catch (error) {
        // Log error
        console.error("Signup error:", error);

        // Send error response with specific error message
        res.status(400).json({ error: error.message });
    }
}

async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            where: { username },
            attributes: ["id", "username", "password"],
        });

        // Check if user exists
        if (!user) {
            throw new Error("User not found");
        }

        // Validate password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error("Invalid password");
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET
        );

        // Send user data and token in response
        res.status(200).json({ user, token });
    } catch (error) {
        // Log error
        console.error("Login error:", error);

        // Send error response with specific error message
        res.status(401).json({ error: error.message });
    }
}

module.exports = {
    login,
    signup,
};
