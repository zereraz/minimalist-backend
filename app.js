const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const pug = require('pug')
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

const port = 3000

const socketSetup = require('./sockets')(io)

app.get('/', (req, res) => {
  res.render('index')
})

server.listen(port, () => {
  console.log("Listening on port ", port)
})
