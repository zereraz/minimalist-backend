const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {transport:['websocket','polling']})
const pug = require('pug')
const path = require('path')
const fs = require('fs')

const port = process.env.PORT || 3000
const socketSetup = require('./sockets')(io)



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')


app.get('/', (req, res) => {
  res.render('index')
})

server.listen(port, () => {
  console.log("Listening on port ", port)
})
