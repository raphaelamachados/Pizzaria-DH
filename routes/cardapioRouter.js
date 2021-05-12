const express = require('express')
const router = express.Router()

const cardapioController = require('../controller/cardapioController')

router.get('/cardapio', cardapioController.listar)

module.exports = router
