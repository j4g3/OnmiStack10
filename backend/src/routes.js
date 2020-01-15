const { Router } = require('express')

const routes =  Router();

routes.get('/', (request, response) => {
  return response.send('Hello World')
})


module.exports = routes