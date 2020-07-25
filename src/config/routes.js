const Router = require("koa-router");

const authRoutes = require('../features/auth/routes');
const userRoutes = require('../features/user/routes');

module.exports = router => {
    authRoutes(router)
    userRoutes(router)
}