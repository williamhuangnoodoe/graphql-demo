// Entrypoint file

// normal express app initialization
const express = require('express')
const app = express()

// import graphql server
const { server } = require('./graphql')

// express apply graphql server AS middleware
server.applyMiddleware({ app })

// listen normally
app.listen(5000, () => {
  console.log('listening on port 5000')
})
