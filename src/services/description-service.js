const { Description } = require('../models/index')

class DescriptionService {

    static async findAll() {

        try {
            let result = await Description.findAll({});
            return result;
        } catch (err) {
            let msg = 'Ocorreu um erro ao processar sua requisição'
            const error = new Error(msg)
            error.code = 500
            throw error
        }
    }

    static async findById(id) {

        try {
            let result = await Description.findOne({ where: { id } })
            return result
        } catch (err) {
            let msg = 'Ocorreu um erro ao processar sua requisição'
            const error = new Error(msg)
            error.code = 500
            throw error
        }

    }

    static async create(description, done) {

        try {
            let result = await Description.create({ description, done })
            return result
        } catch (err) {
            let msg = 'Ocorreu um erro ao processar sua requisição'
            const error = new Error(msg)
            error.code = 500
            throw error
        }
    }

    static async update(description, done, id) {

        try {
            let result = await Description.update({ description, done }, { where: { id } })
            return result;
        } catch (err) {
            let msg = 'Ocorreu um erro ao processar sua requisição'
            const error = new Error(msg)
            error.code = 500
            throw error
        }
    }

    static async delete(id) {

        try {
            let result = await Description.destroy({ where: { id:id } })
            return result
        } catch (err) {
            let msg = 'Ocorreu um erro ao processar sua requisição'
            const error = new Error(msg)
            error.code = 500
            throw error
        }


    }

}

module.exports = DescriptionService