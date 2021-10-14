const LoggedInUsersController = require("../controller/LoggedInUsers-controller")
const express = require("express")
const router = express.Router()
router.get('/all-users', LoggedInUsersController.getAllUsers)

module.exports = router