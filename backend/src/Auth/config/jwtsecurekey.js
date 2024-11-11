const crypto = require('crypto');
const securetKey = crypto.randomBytes(32).toString('hex');

module.exports = { securetKey:securetKey};