const routes = require("../../config/routes");

const contrllers = require('./controllers')

module.exports = router => {
    router.post('/v1/api/auth', contrllers.auth)
}