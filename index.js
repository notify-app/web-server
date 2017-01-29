'use strict'

const path = require('path')
const express = require('express')
const config = require('./config')
const app = express()

app.use('/login', express.static(path.join(__dirname, './public/login')))
app.use(express.static(__dirname + '/public/app'))
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app', 'index.html'))
})

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))