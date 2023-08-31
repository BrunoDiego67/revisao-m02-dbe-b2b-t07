const express = require('express')
const rotas = require('./rotas')

const app = express()

app.use(express.json())
app.use(rotas)

app.listen(3000, () => {
    console.log('servidor rodando na porta http://localhost:3000')
})


// CRUD - Create, Read, Update, Delete 
// GET - /cliente/:id -> retornar um único cliente
// GET - /cliente - retorna todos clientes
// POST - /cliente - cadastrar cliente
// PUT - /cliente/:id -> atualiza um cliente
// DEL - /cliente/:id -> exclui um cliente