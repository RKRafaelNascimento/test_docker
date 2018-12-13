const descriptionFindAll = {
    
}

const descriptionFindById = {
    description: 'Rota que traz uma description cadastra!',
    params: {
        type: 'object',
        properties: {
            id: {type: 'number', description: 'Id da description'}
        }
    }
}

const descriptionCreate = {
    description: 'Rota de criar descriptions',
    body: {
        type: 'object',
        properties: {
            description: {type: 'string', description: "Texto"},
            done: {type: 'boolean', description: "TRUE OR FALSE"}
        }
    }
}

const descriptionUpdate = {
    description: 'Rota de atualização',
    params: {
        type: 'object',
        properties: {
            id: {type: 'number', description: "Informe o ID"}
        }
    },
    body: {
        type: 'object',
        properties: {
            description: {type: 'string', description: "Texto"},
            done: {type: 'boolean', description: "TRUE OR FALSE -> DEFAULT: FALSE"}
        }
    }
}

const descriptionDelete = {
    description: 'Rota de remover',
    params: {
        type: 'object',
        properties: {
            id: {type: 'number', description: "Informe o ID"}
        }
    }
}


module.exports = {
    descriptionFindAll,
    descriptionFindById,
    descriptionCreate,
    descriptionUpdate,
    descriptionDelete
}