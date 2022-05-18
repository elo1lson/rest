const express = require('express')
const router = express.Router()

router.get('/',(req, res, next)=>{
    res.status(200).send({
        message: "This  is a first messasse test"
    })
})

module.exports = router