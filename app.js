const express = require('express')
const app = express()

app.get('/', function (request, response) {
  response.send('Express JS')
})
app.listen(3000)

module.exports = app
