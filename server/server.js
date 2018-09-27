var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', require('./routes/auth'))
server.use('/api/dashboard', require('./routes/dashboard'))
server.use('/api/dashboard', require('./routes/dashboard'))
server.use('/api/hsmeeting', require('./routes/hsmeeting'))
server.use('/api/dailymeeting', require('./routes/dailymeeting'))
server.use('/api/incident', require('./routes/incident'))


module.exports = server
