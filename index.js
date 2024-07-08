const express = require('express')

const PORT = 8080
const app = express()

app.get("/", (req, res)=> res.send('<h1>Hello world...qqsq</h1>'))

app.listen(PORT, ()=> console.log("hello from node app on port ", PORT))

