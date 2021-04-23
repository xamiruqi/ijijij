const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h2>This is the start:</h2>'))


app.get('/Books', (req, res) => res.send('<h2>You are in the library</h2>'))


app.get('/FAQ', (req, res) => res.send(`<h2 style= color: green>This is the page for questions</h2>`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))