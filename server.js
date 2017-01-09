import express from 'express';
import graphQLHTTP from 'express-graphql';

const app = express();

app.use(graphQLHTTP({
    graphiql: true,
}));

app.listen(3000);