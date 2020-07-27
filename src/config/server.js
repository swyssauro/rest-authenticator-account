const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const applyRoutes = require('./routes');
const bodyParser = require('koa-bodyparser');

const router = new Router();
const app = new Koa();

module.exports = () => {
    
    applyRoutes(router)
    app.use(cors());
    app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())
    
    app.listen(process.env.PORT || 8080, () => console.log('online port.'));
}