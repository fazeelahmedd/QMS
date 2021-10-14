const loginController = require("../../controller/login/staff-login-controller")
const express = require("express")
const router = express.Router()
router.post('/loginstaff', loginController.logIn)

module.exports = router