const  express = require('express');
const  router = express.Router();
const {signupUser} = require("../controller/signup");
router.post("/signup",signupUser);


module.exports = router;