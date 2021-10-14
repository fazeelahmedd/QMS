// const client =require ('./client')
const express = require('express')
const { supabase } = require('./client')
const app = express()
const bcrypt = require('bcrypt')
require('dotenv').config()
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() })
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.UseCors();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
const loggedUsers =  require("./routes/LoggedInUsers-route")
const login = require("./routes/login/login-route")
const signup = require("./routes/signup-route")
const logout = require("./routes/logout-route")
const loginstaff = require("./routes/login/staff-login-route")
const addBusiness = require("./routes/add-business-route")

app.get("/health", (req, res, next) => {
  res.status(200).json({
    message: "OK"
  })
})

app.use("/auth", loggedUsers)
app.use("/auth", login)
app.use("/auth",signup)
app.use("/auth",logout)
app.use("/auth",loginstaff)
app.use("/business",addBusiness)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })