const addBusinessController = require("../controller/add-business-controller")
const express = require("express")
const router = express.Router()
router.post('/add-business', addBusinessController.addBusiness)

module.exports = router