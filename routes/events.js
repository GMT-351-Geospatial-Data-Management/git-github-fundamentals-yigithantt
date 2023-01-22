const router = require('express').Router()
const pool = require('../database-connection')

router.get('/', async (req, res) => {
    pool.query(`select * from events`, (err, dbRes) => {
        res.status(200).send(dbRes.rows)
    })
})

router.post('/', async (req, res) => {
    const {commid, description, eventtime} = req.body
        
    /*await pool.query(`select id from communities WHERE name=$1`, [commname], (err, dbRes) => {
        const commid = dbRes.rows[0].id

    })*/
    // 2021-09-27 15:22:53.679985+02
    pool.query(`insert into events (commid, description, eventtime) VALUES ($1, $2, $3)`, [commid, description, eventtime], (err, dbRes) => {
        if (err) {
            console.error(err);
            return;
        }
        res.status(200).send(dbRes)
    })

})

router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {commid, description, eventtime} = req.body

    /*let commid = -1
    
    await pool.query(`select id from communities WHERE name='$1'`, [commname], (err, dbRes) => {
        const commid = dbRes.rows[0].id

        pool.query(`insert into events (commid, description, eventtime) VALUES ($1, $2, $3)`, [commid, description, eventtime], (err, dbRes) => {
            if (err) {
                console.error(err);
                return;
            }
            res.status(200).send(dbRes)
        })

    })*/
    pool.query(`DELETE FROM events WHERE id=$1`, [id], null)

    pool.query(`insert into events (commid, description, eventtime) VALUES ($1, $2, $3)`, [commid, description, eventtime], (err, dbRes) => {
        if (err) {
            console.error(err);
            return;
        }
        res.status(200).send(dbRes)
    })

})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    pool.query(`DELETE FROM events WHERE id=$1`, [id], (err, dbRes) => {
        if (err) {
            console.error(err);
            return;
        }
    })

    res.status(200).send({ status: "ok"})
})
module.exports = router