const signupController = require("../controller/signup-controller")
const express = require("express")
const router = express.Router()
router.post('/signup', signupController.signUp)

module.exports = router