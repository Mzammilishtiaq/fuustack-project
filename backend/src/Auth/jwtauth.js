const jwt = require('jsonwebtoken');
const { securetKey } = require('./config/jwtsecurekey');

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }

    return jwt.sign(payload, securetKey, { expiresIn: '1h' });
}
function generateRefreshToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }

    return jwt.sign(payload, securetKey, { expiresIn: '7h' });
}

function generateRefreshToken(token) {
    return jwt.verify(token, securetKey);
}

module.exports= {generateToken,generateRefreshToken}