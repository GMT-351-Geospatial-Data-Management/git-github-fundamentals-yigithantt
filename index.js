const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({ date: Date.now() })
})

app.listen(8000, () => {
    console.log('server started')
})