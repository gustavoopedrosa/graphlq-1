const userSchema = require("../user/schema/user.graphql");
const { ApolloServer } = require("apollo-server");
const userResolvers = require("../user/resolvers/userResolvers");

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({ typeDefs, resolvers });

// para setar a porta server.listen({port: 4001})

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});

//Schema define o que pode ser feito no servidor graphQL
//resolvers são as funções para implementar o que foi definido no schema
