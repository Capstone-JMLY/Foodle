const Sequelize = require('sequelize')
const db = require('../db')

const Response = db.define('response', {
  dateSelections: {
    type: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)),
  },
  textSelections: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
})

module.exports = Response
