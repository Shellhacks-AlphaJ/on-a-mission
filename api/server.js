const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

app.listen(5000, () => {
    console.log('listening on https://localhost:5000')
})
