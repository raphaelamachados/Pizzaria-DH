const express = require('express')
const router = express.Router()

const clientes = require('../model/clientes')

router.get('/', (req,res)=>{
    res.send(clientes)
})

module.exports = router