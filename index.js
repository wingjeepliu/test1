const express = require('express')
require('dotenv').config();
const globalVar = process.env;
const app = express()
console.log(globalVar.appEvn)
app.get('/', function (req, res) {
  res.send('Hello World !!' + globalVar.appEvn)
})

app.listen(3003)