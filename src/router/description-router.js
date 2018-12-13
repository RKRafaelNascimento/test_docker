const { Description } = require('../services/index')
const { descriptionFindAll, descriptionFindById, descriptionCreate,
    descriptionUpdate, descriptionDelete } = require('../schema/description-schema')


async function routes(fastify, options) {

    fastify.get('/description', { schema: descriptionFindAll }, async (request, reply) => {
        let response
        try {
            response = await Description.findAll()
            reply.send(response)
        } catch (err) {
            response = {
                'error': 'Uncaught server error: ' + JSON.stringify(err)
            }
            let errorCode = 500
            if (err.code != null) {
                errorCode = err.code
            }
            reply.code(errorCode).send(response)
        }
    })

    fastify.get('/description/:id', { schema: descriptionFindById }, async (request, reply) => {
        let response
        try {
            response = await Description.findById(request.params.id)
            reply.send(response)
        } catch (err) {
            response = {
                'error': 'Uncaught server error: ' + JSON.stringify(err)
            }
            let errorCode = 500
            if (err.code != null) {
                errorCode = err.code
            }
            reply.code(errorCode).send(response)
        }
    })

    fastify.post('/description/create', { schema: descriptionCreate } , async (request, reply) => {
        let response
        try {
            response = await Description.create(request.body.description, request.body.done)
            reply.send(response)
        } catch (err) {
            response = {
                'error': 'Uncaught server error: ' + JSON.stringify(err)
            }
            let errorCode = 500
            if (err.code != null) {
                errorCode = err.code
            }
            reply.code(errorCode).send(response)
        }
    })

    fastify.put('/description/update/:id', { schema: descriptionUpdate } , async (request, reply) => {
        let response
        try {
            response = await Description.update(request.body.description, request.body.done, request.params.id)
            reply.send(response)
        } catch (err) {
            response = {
                'error': 'Uncaught server error: ' + JSON.stringify(err)
            }
            let errorCode = 500
            if (err.code != null) {
                errorCode = err.code
            }
            reply.code(errorCode).send(response)
        }
    })

    fastify.delete('/description/delete/:id', { schema: descriptionDelete } , async (request, reply) => {
        let response

        try {
            response = await Description.delete(request.params.id)
            reply.send(response)
        } catch (err) {
            response = {
                'error': 'Uncaught server error: ' + JSON.stringify(err)
            }
            let errorCode = 500
            if (err.code != null) {
                errorCode = err.code
            }
            reply.code(errorCode).send(response)
        }
    })

}


module.exports = routes