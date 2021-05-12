/* Criar nova pasta para o projeto e nomeá-lo de pizzaria-backend
Iniciar o npm na pasta, criar um arquivo de ponto de entrada no sistema (chamá-lo de index.js)
Instalar o express e nodemon
No arquivo index.js e criar a rota '/' do tipo get
Criar, na raiz do projeto, uma pasta chamada cardapio e outra chamada clientes  */
//-----------------------------------------------------------------------------------------------//
/* Desafio II:
Criar rota "/pizza/cardapio" que liste todas as pizzas (do tipo get)
Criar rota "/clientes" que liste todos os clientes (do tipo get)
Trabalhando com parâmetros:
crie a rota "/pizza" que receba um parâmetro chamado numero e retorne a pizza correspondente.
Para completar o tópico acima, desenvolva o método chamado buscarPizza() no módulo cardápio. PS: esse método precisa receber um parâmetro para funcionar.
//-------------------------------------------------------------------------------------------------//
criar 2 arquivos:
cardapio.js (ira armazenar um array de objetos contendo pizzas) -> numero | nome | preço
clientes.js (armazenar a lista de clientes - array de objetos ) -> nome | telefone */
//------------------------------------------------------------------------------------------------//


const express = require('express')
const app = express()

const cardapioRouter = require('./routes/cardapioRouter')
const clientesRouter = require('./routes/clientesRouter')

app.get('/', (req,res)=>{
    res.send("Deu tudo certo irmão, pode dormir tranquilo")
})

app.use('/pizza', cardapioRouter)
app.use('/clientes', clientesRouter)

app.listen(3030, ()=> console.log("Servidor funcionando!"))