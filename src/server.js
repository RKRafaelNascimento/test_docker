const fastify = require('fastify')({ logger: true })
const routes = require('./router/index')
const sqlize = require('../src/services/sequelize')
const port = 3001

fastify.register(require('fastify-cors'))
fastify.register(require('fastify-multipart'))

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/swagger',
    swagger: {
        info: {
            title: 'Test swagger',
            description: 'testing the fastify swagger api',
            version: '0.1.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: 'localhost:3001',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'BACKEND', description: 'Description' }
        ]
    }
})


for (const i in routes) {
    fastify.register(routes[i])
}

const start = async () => {

    try {
        fastify.ready(err => {
            if (err) throw err
            fastify.swagger()
        })
        await fastify.listen(port, '0.0.0.0')
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
        console.log(`Server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        console.error(err)
        console.error(err)
        process.exit(1)
    }
}

start()