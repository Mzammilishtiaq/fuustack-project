const bcrypt = require('bcryptjs');
const Users = require("../database/model/registermodel");
// const { generateToken } = require('../config/jwtauth');

async function login(req, res) {
    try {
        const Email = req.body.email;
        const Password = req.body.password;
        const user = await Users.findOne({email:Email});
        console.log(user)
        if (!user) {
            return res.status(404).json({ message: "Users not found" });
        }
        const passwordCompare = await bcrypt.compare(Password, user.password);
        if (!passwordCompare) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        const token = user.generateAuthToken();
        user.save();
        res.status(200).json({user: user,token:token});
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { login }