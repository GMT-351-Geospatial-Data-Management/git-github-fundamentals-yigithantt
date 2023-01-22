const router = require('express').Router()

const pool = require('../database-connection')

router.get('/', (req, res) => {
    let communities = []
    let events = []

    let obj = {}

    pool.query(`select * from communities`, (err, dbRes) => {
        dbRes.rows.forEach(element => {
            communities.push(element)
        });

        pool.query(`select * from events`, (err, dbRes) => {
            dbRes.rows.forEach(element => {
                events.push(element)
            });

            res.render('index', {communities, events})    
        })    
    })
    


})

module.exports = router