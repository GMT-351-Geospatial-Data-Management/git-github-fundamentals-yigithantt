const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).send({ date: Date.now() })
})

module.exports = router