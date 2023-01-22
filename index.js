const express = require('express')

const indexRouter = require('./routes/index')
const eventsRouter = require('./routes/events')
const communitiesRouter = require('./routes/communities')

const pool = require('./database-connection')

const app = express()

app.use('/', indexRouter)
app.use('/events', eventsRouter)
app.use('/communities', communitiesRouter)

app.listen(8000, () => {
    console.log('server started')
})