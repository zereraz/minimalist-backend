const level = require('levelup')
const sockDb = level('./sockDb', {valueEncoding: 'json'})

exports = module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log("Connected")
  })
  return io
}
