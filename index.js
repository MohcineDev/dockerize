const express = require('express')

const PORT = 5000
const app = express()

app.get("/", (req, res)=> res.send('<h1>Hello world...wxcwxc</h1>'))

app.listen(PORT, ()=> console.log("hello from node app on port ", PORT))

