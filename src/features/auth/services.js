const db = require('../../database/models');
module.exports = {
    auth: payload => db.user.findOne({ where: payload })
}