const express = require('express')
const app = express()
const port = 3000

app.get('/users', function (req, res) {
  res.json('GET users')
})

app.post('/users', function (req, res) {
    res.json('POST users')
})

app.put('/users/:id', function (req, res) {
    res.json('PUT users')
})

app.delete('/users/:id', function (req, res) {
    res.json('DELETE users')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})