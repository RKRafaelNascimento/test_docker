const { Description} = require('../models/index')
const sqlize = require('../services/sequelize')

async function setup () {
  await sqlize.sync()

  await Description.drop({ cascade: true })
  
  await sqlize.sync()
  
  await Description.create({
    description: "Testando description",
    done: true
  })
  await Description.create({
    description: "Testando description 01",
    done: true
  })
  await Description.create({
    description: "Testando description 02",
    done: true
  })
  await Description.create({
    description: "Testando description 03",
    done: false
  })

}
setup()
