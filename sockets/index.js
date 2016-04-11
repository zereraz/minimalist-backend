const level = require('levelup')
const sockDb = level('./sockDb', {valueEncoding: 'json'})
const shortid = require('shortid')

exports = module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on("storeLocation", (location) => {
      var longLat = location.split(":")
      var connId = shortid.generate()
      var person = {
        "id": connId,
        "location": location
      }
      sockDb.put(connId, JSON.stringify(person), (err) => {
        if(err)
          throw new Error(err.toString())
        socket.emit("setId", connId)
        showNewUser(socket, person)
      })
    })
  })
  return io
}

function showNewUser(socket, person) {
  socket.broadcast.emit("newUser", person)
}

function setMarker(socket, location) {
  socket.emit("setMarker", location)
}
