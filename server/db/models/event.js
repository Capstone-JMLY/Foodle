const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  startTime: {
    type: Sequelize.DATE,
  },
  endTime: {
    type: Sequelize.DATE,
  },
  googlePlacesId: {
    type: Sequelize.STRING,
  },
  activityType: {
    type: Sequelize.STRING,
    defaultValue: 'restaurant',
  },
  activitySubtype: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    defaultValue: 'new+york',
  },
  neighborhood: {
    type: Sequelize.STRING,
  },
  allowSuggestions: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  initialDueDate: {
    type: Sequelize.DATE,
  },
  urlKey: {
    type: Sequelize.STRING,
  },
  finalized: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
})

//method to create random confirmation number
Event.beforeCreate((event) => {
  let key =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)

  event.urlKey = key
})

module.exports = Event
