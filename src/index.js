
const { GraphQLServer } = require('graphql-yoga')
//const { prisma } = require('./generated/prisma-client')

//Move below GraphQL schema in new file 

// Root field for GrphQL query
const typeDefs = `
type Query {
  info: String!
  feed:[Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`

// In memory store for links information 
let links = [{
  id:`link-0`,
  url:`www.howtographql.com`,
  description:`Full stack tutorial for Graph QL`
},
{
  id:`link-1`,
  url:`www.google.com`,
  description:`Search engine`
}]

// Resolver functions for implemented root types
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  }
  // not sure why needed as of now
  // ,
  // Link: {
  //   id: (parent) => parent.id,
  //   description: (parent) => parent.description,
  //   url: (parent) => parent.url,
  // }
  
}

// Register the schema type definetion and resolver functions with GraphQL

// For inline schema 
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

// For external schema file 
// const server = new GraphQLServer({
//   typeDefs: `./src/schema.graphql`,
//   resolvers,
// })


server.start(() => console.log(`Server is running on http://localhost:4000`))