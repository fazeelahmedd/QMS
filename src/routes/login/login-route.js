const loginController = require("../../controller/login/login-controller")
const express = require("express")
const router = express.Router()
router.post('/login', loginController.logIn)

module.exports = router