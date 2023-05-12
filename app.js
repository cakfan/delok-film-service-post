const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const movieRouter = require('./routes/movies')
const dramaRouter = require('./routes/dramas')
const castRouter = require('./routes/cast')
const categoryRouter = require('./routes/category')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/movie', movieRouter)
app.use('/drama', dramaRouter)
app.use('/cast', castRouter)
app.use('/category', categoryRouter)

module.exports = app
