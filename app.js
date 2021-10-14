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
const loggedUsers =  require("./src/routes/LoggedInUsers-route")
const login = require("./src/routes/login/login-route")
const signup = require("./src/routes/signup-route")
const logout = require("./src/routes/logout-route")
const loginstaff = require("./src/routes/login/staff-login-route")
const addBusiness = require("./src/routes/add-business-route")
app.use("/auth", loggedUsers)
app.use("/auth", login)
app.use("/auth",signup)
app.use("/auth",logout)
app.use("/auth",loginstaff)
app.use("/business",addBusiness)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })