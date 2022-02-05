const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyparser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { applyMiddleware } = require("graphql-middleware");
const userMiddleware = require("./graphql/middlewares/index");
const isAuthenticated = require("./utils/isAuthenticated");
const cookieParser = require("cookie-parser");

const startServer = async () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  app.use(cookieParser());
  app.use(bodyparser());
  app.use(cors());

  const middleware = [userMiddleware];

  const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

  const server = new ApolloServer({
    schema: schemaWithMiddleware,
    context: (context) => ({
      ...context,
      isUserAuthenticated: isAuthenticated(context),
    }),
  });
  await server.start();
  server.applyMiddleware({ app });

  mongoose
    .connect(process.env.DATABASE, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      const port = process.env.PORT || 8000;
      app.listen(port, () => {
        console.log(
          `Server ready at http://localhost:${port}${server.graphqlPath}`
        );
      });
    });
};

startServer();

//How to do inivite user
//Follow up add that user to particualr card or board
//Follow change the borad typeDef and schema repectively to active coments
//Upload blob to server.
