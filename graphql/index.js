const path = require('path')
const {
  mergeTypes,
  mergeResolvers,
  fileLoader,
} = require('merge-graphql-schemas')
const { buildFederatedSchema } = require('@apollo/federation')
const { gql, ApolloServer } = require('apollo-server-express')

// Merge all *.graphql files in the schema folder
const typeDefs = gql(
  mergeTypes(fileLoader(path.join(__dirname, '/schema/*.graphql')), {
    all: true,
    sort: true,
  }),
)

// Merge all resolvers into one object
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, '/resolvers/**/index.js'), {
    extensions: ['.js'],
    ignoreIndex: false,
  }),
)

const server = new ApolloServer({
  // generate an executable schema that can be linked by apollo gateway
  schema: buildFederatedSchema({
    typeDefs,
    resolvers,
  }),
})

// export all components
// maybe for testing in the future
module.exports = {
  typeDefs,
  resolvers,
  server
}
