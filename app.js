const express = require('express')
const app = express()
const port = 3000

app.get('/hello/:name', (req, res) => res.send('Hello, ' + req.params.name))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))