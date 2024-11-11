const mongoose = require('mongoose');

main().then(console.log("connection in mongodb"))
    .catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/nodereact');
}

module.exports = mongoose;