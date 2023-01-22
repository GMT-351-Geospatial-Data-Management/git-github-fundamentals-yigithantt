const router = require('express').Router()

const pool = require('../database-connection')

router.get('/', (req, res) => {
    res.status(200).send({ date: Date.now() })
})

module.exports = router