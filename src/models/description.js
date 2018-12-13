const sqlize = require('../services/sequelize')
const Sequelize = require("sequelize")

const Description =  sqlize.define('description', {
    description: {type: Sequelize.STRING(255), allowNull: false},
    done: {type: Sequelize.BOOLEAN, allowNull: false , defaultValue: false},
    createAt: {type: Sequelize.DATE, defaultValue: Date.now()}
})


module.exports = Description