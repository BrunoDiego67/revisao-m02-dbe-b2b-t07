const { Router } = require('express')
const clienteControlador = require('./controladores/cliente')

const rotas = Router()

rotas.get('/', (req, res) => {
    res.status(201).json({ mensagem: 'OK' })
})

rotas.post('/cliente', clienteControlador.cadastrar)
rotas.get('/cliente', clienteControlador.listar)
rotas.get('/cliente/:id', clienteControlador.detalhar)
rotas.put('/cliente/:id', clienteControlador.atualizar)
rotas.delete('/cliente/:id', clienteControlador.excluir)

module.exports = rotas