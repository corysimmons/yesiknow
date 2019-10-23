const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const app = express();
app.use(express.static(__dirname));
app.use('/graphql', graphqlHTTP(() => ({ schema, graphiql: true })));

const PORT = process.env.PORT || 1337

app.listen(PORT, function() {
  console.log(`--- GraphiQL started on http://localhost:${PORT} ---`);
});
