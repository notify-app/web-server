'use strict'

const path = require('path')
const express = require('express')
const config = require('./config')
const app = express()

app.use('/login', express.static(path.join(__dirname, './public/login')))
app.use('/', express.static(path.join(__dirname, './public/app')))

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))