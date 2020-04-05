const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers
});

server.start({port: 3000}, ()=>{
  console.log('servidor iniciado na porta 3000')
});
