const User = require("../models/user.model");

function loginUser(userData) {
    return User.create({
        username: userData[0],
        password: userData[1],
    });
}
