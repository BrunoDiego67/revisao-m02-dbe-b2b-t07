let clientes = []

const buscarClientePorId = (id) => {
    return clientes.find(cliente => {
        return Number(cliente.id) === Number(id)
    })
}


const cadastrar = (req, res) => {
    const { nome, email, cpf } = req.body
    let id = 1

    if (!nome || !email || !cpf) {
        return res.status(400).json({ mensagem: 'Preencha os campos: nome, email e senha. Pois são obrigatórios' })
    }

    if (clientes.length > 0) {
        id = clientes[clientes.length - 1].id + 1
    }

    let cliente = {
        id,
        ...req.body
    }

    clientes.push(cliente)

    return res.status(201).json(cliente)
}

const listar = (req, res) => {
    return res.status(200).json(clientes)
}

const detalhar = (req, res) => {
    let { id } = req.params

    let clienteEncontrado = buscarClientePorId(id)

    if (!clienteEncontrado) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' })
    }

    return res.status(200).json(clienteEncontrado)
}

const atualizar = (req, res) => {
    let { id } = req.params
    let { nome, email, cpf } = req.body

    if (!nome || !email || !cpf) {
        return res.status(400).json({ mensagem: 'Preencha os campos: nome, email e senha. Pois são obrigatórios' })
    }

    let clienteEncontrado = buscarClientePorId(id)

    if (!clienteEncontrado) {
        return res.status(400).json({
            "mensagem": "Cliente não encontrado"
        })
    }

    clienteEncontrado.nome = nome 
    clienteEncontrado.email = email 
    clienteEncontrado.cpf = cpf

    return res.status(200).json(clienteEncontrado)
}

const excluir = (req, res) => {
    let { id } = req.params

    let clienteEncontrado = buscarClientePorId(id)

    if (!clienteEncontrado) {
        return res.status(400).json({
            "mensagem": "Cliente não encontrado"
        })
    }

    // filtrando os clientes que nao possuam o ID informado na rota
    // para assim conseguirmos remover o registro que deve ser excluido
    clientes = clientes.filter(cliente => {
        return Number(cliente.id) != Number(id)
    })

    return res.status(200).json({
        "mensagem": "Cliente excluído com sucesso"
    })
}

module.exports = {
    cadastrar,
    listar,
    detalhar,
    atualizar,
    excluir
}