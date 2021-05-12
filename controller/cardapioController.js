const cardapio = require('../model/cardapio')

const cardapioController = {
    listar: (req,res)=>{
        res.send(cardapio)
    }
}

module.exports = cardapioController