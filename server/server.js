const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Hello")
})


const mongoose = require('mongoose')
const { mongoURI } = require('./config')
const cors = require('cors');
const { appendFile } = require('fs');
require('dotenv').config();

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB database Connected..."))
    .catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})