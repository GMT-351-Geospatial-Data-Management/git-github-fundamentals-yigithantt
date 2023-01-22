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

router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {name} = req.body
    pool.query(`DELETE FROM communities WHERE id=$1`, [id], null)

    pool.query(`insert into communities (name) VALUES ($1)`, [name], (err, dbRes) => {
        if (err) {
            console.error(err);
            return;
        }
        res.status(200).send(dbRes)
    })
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const {name} = req.body
    pool.query(`DELETE FROM communities WHERE id=$1`, [id], null)

    pool.query(`DELETE FROM events WHERE commid=$1`, [id], (err, dbRes) => {
        if (err) {
            console.error(err);
            return;
        }
    })

    res.status(200).send({ status: "ok"})
})

module.exports = router