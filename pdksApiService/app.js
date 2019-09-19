
// Require the framework and instantiate it
const fs = require('fs');

const fastify = require('fastify')({
  logger: true,
//   https: {
//     allowHTTP1: true,
//     key: fs.readFileSync('./certs/api.herkul.key'),
//     cert: fs.readFileSync('./certs/ap.herkul.cert')
//   },

})

// Import cors 
fastify.register(require('fastify-cors'), {
  // put your options here
})

// Import helmet 
const helmet = require('fastify-helmet')
fastify.register( // register hemlmet
  helmet, {
    crossdomain: {
      setTo: 'all'
    }
  }
  // Example of passing an option to x-powered-by middleware
)

// Import Swagger Options
const swagger = require('./config/swaggerConf')
fastify.register(require('fastify-swagger'), swagger.config) // Register Swagger


// //Import mainSync Router
// const mainSyncRoutes = require('./routes/mainSyncRouter')
// mainSyncRoutes.forEach((route, index) => { // Loop over each mainSync Router
//   fastify.route(route)
// })

//Import mainSync Router
const staffRouter = require('./routers/staffRouter');
staffRouter.forEach((route, index) => { // Loop over each mainSync Router
  fastify.route(route)
})

const permissionRouter = require('./routers/permissionRouter');
permissionRouter.forEach((route, index) => { // Loop over each mainSync Router
  fastify.route(route)
})

const shiftRouter = require('./routers/shiftRouter');
shiftRouter.forEach((route, index) => { // Loop over each mainSync Router
  fastify.route(route)
})

const workPlanForGroupRouter = require('./routers/workPlanForGroupRouter');
workPlanForGroupRouter.forEach((route, index) => { // Loop over each mainSync Router
  fastify.route(route)
})

const workGroupRouter = require('./routers/workGroupRouter');
workGroupRouter.forEach((route, index) => { // Loop over each mainSync Router
  fastify.route(route)
})

const workPlanForUserRouter = require('./routers/workPlanForUserRouter');
workPlanForUserRouter.forEach((route, index) => { // Loop over each mainSync Router
  fastify.route(route)
})



// ? Sql Connection Open (tek baglanti acmak ne kadar dogru)
// const Conf = require("./config/mssqlConf")
// const sql = require('mssql')
// sql.connect(Conf.mainSqlConf).then(pool => {
//   global.sqlPool = pool
// })

//! Run the server!
fastify.listen(5001, '0.0.0.0', (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  fastify.swagger() //Start Swagger 
  console.info(`server listening on ${fastify.server.address().port}`)
})