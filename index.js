const express = require('express')

const indexRouter = require('./routes/index')
const eventsRouter = require('./routes/events')
const communitiesRouter = require('./routes/communities')

const app = express()

app.use(indexRouter)
app.use(eventsRouter)
app.use(communitiesRouter)

app.listen(8000, () => {
    console.log('server started')
})