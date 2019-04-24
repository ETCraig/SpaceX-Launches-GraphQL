const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const Port = process.env.PORT || 3030;

app.listen(Port, () => console.log(`Server is listening on port: ${Port}`));