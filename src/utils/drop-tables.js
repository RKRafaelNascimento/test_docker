const { Description } = require('../models/index')

async function drop () {
  await Description.drop()
}

drop()
