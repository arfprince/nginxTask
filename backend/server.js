const express = require('express')
const app = express()
const port = 3334

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
