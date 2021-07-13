const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const userRoute = require("./routes/user");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// const server = new ApolloServer({
//   typedefs,
//   resolvers,
// });

// mongoose
//   .connect(process.env.DATABASE, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("DB connected");
//   });

// // app.use(cors());
// // app.use(cookieparser());
// // app.use(bodyparser());

// // app.use("/api", userRoute);

// const port = process.env.PORT || 8000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}.......`);
// });

// const typeDefs = gql`
//   type Query {
//     say: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     say: () => "helo",
//   },
// };

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    const port = process.env.PORT || 8000;
    server.listen(port, () => {
      console.log(`Server is running on port ${port}.......`);
    });
  });
