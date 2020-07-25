const db = require('../../database/models')

module.exports = {
    create: payload => db.user.create(payload) 
}