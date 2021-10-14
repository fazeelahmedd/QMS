const logoutController = require("../controller/logout-controller")
const express = require("express")
const router = express.Router()
router.post('/logout', logoutController.logout)

module.exports = router