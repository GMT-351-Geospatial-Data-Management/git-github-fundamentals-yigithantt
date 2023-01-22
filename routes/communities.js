const router = require('express').Router()
const pool = require('../database-connection')

router.get('/', async (req, res) => {
    pool.query(`select * from communities`, (err, dbRes) => {
        res.status(200).send(dbRes.rows)
    })
})

router.post('/', async (req, res) => {
    const {name} = req.body
    pool.query(`insert into communities (name) VALUES ($1)`, [name], (err, dbRes) => {
        if (err) {
            console.error(err);
            return;
        }
        res.status(200).send(dbRes)
    })
})

module.exports = router