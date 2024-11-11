const express = require('express');
const app = express();
const cors =  require('cors');
const port = process.env.PORT || 8000;
const registerrouter = require("./routers/register-router");
const loginrouter = require("./routers/login-router");
// const bodyParser = require('body-parser');
const {createAdminAccount} = require("./script/setup");
app.use(express.json());
app.use(cors());
app.use("/user",registerrouter);
app.use("/auth",loginrouter);

app.get('/', (req, res) => {
    res.send('home')
})
createAdminAccount();


app.listen(port, () => {
    console.log(`server is running localhost:${port}`)
})
