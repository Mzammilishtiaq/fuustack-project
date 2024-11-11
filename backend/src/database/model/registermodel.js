const mongoose = require("../mongodb-connection");
const jwt = require('jsonwebtoken');
const {securetKey} = require('../../Auth/config/jwtsecurekey');

const modelschema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        unique: true,
        type: String
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer'
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

});

modelschema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() },securetKey);
    user.tokens = user.tokens.concat({ token });
    return token;
};


const usermodel = mongoose.model("nodetabs", modelschema)

module.exports = usermodel;