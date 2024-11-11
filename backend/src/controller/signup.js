const registermodel = require("../database/model/registermodel");
const bcrypt = require("bcryptjs");




async function signupUser(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new registermodel({
            firstName,
            lastName,
            email,
            password: hashPassword,
            role: 'customer'
        });

        // Check if the email already exists in the database
        const existingUser = await registermodel.findOne({ email });
        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }
        // Save the new user to the database
        const token = newUser.generateAuthToken();
        const user = await newUser.save();
        
        // Return success response
        res.status(201).json({ message: "User created successfully", createUser: user,'token':token});
    } catch (error) {
        // Handle errors
        console.error("Error in signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { signupUser };
