const router = require('express').Router()

const pool = require('../database-connection')

router.get('/', (req, res) => {
    const fillObject = { 
        communities: [],
        events: []
    }

    pool.query(`select * from communities`, (err, dbRes) => {
        dbRes.rows.forEach(element => {
            fillObject.communities.push(element)
        });
    })
    
    pool.query(`select * from events`, (err, dbRes) => {
        dbRes.rows.forEach(element => {
            fillObject.events.push(element)
        });
    })

    res.status(200).send(fillObject)
})

module.exports = router