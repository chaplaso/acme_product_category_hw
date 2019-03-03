const {SyncAndSeed, Product, Category} = require('./db')

const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 5000;



app.use(express.json())

app.use(morgan('dev'))

app.listen(PORT, console.log(`listening on ${PORT}`))

SyncAndSeed()

