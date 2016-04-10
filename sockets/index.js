const level = require('levelup')
const sockDb = level('./sockDb', {valueEncoding: 'json'})

sockDb.put('test', 'value')

exports = module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log("Connected")
  })
}
