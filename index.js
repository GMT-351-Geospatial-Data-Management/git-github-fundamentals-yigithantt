const express = require('express')

const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const eventsRouter = require('./routes/events')
const communitiesRouter = require('./routes/communities')

const app = express()

app.use(bodyParser.json())

app.use('/', express.static('static'))

app.set('view engine', 'pug')

app.use('/', indexRouter)
app.use('/events', eventsRouter)
app.use('/communities', communitiesRouter)

app.listen(8000, () => {
    console.log('server started')
})