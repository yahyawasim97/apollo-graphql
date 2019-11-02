const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js')
const app = express();
const cors = require('cors');
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);


const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
});