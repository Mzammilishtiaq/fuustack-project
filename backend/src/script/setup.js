const user = require("../database/model/registermodel");
const bcrypt = require('bcryptjs');

async function createAdminAccount() {
    try {
        const existingAdmin = await user.findOne({ email: 'admin@test.com' })
        if (existingAdmin) {
            console.log('admin account already exist');
        } else {
          const newAdmin = await user({
                firstName: "admin",
                lastName: "admin",
                email: "admin@test.com",
                password: await bcrypt.hash("admin", 10),
                role:"admin"
            });
            const token = newAdmin.generateAuthToken()
            await newAdmin.save();
            res.status(200).json({"token":token});
            console.log('Admin account create successfully');
        }
    } catch (error) {
        console.error(error.message);
    }
}
module.exports= {createAdminAccount};