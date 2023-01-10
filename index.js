const express = require('express')
 const app = express()
  const mysql = require('mysql') // import mysql module
  const cors = require('cors')
  const route = require("./router")
  require('dotenv').config()
//console.log(process.env)

app.use(express.json())
// use the modules
app.use(cors())
app.use("/",route)
/*
// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.Password,
  database: 'employee'
})*/

// make server object that contain port property and the value for our server.
var server = {
  port: 4000
};

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`))