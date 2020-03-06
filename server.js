const express = require('express');
const helmet = require('helmet');



const server = express();

server.use(helmet());
server.use(express.json());

server.use('/recipes', RecipesRouter );
server.get('/', (req, res) => {
    res.send('<h1> Ultimate Chef <h1>')
})

module.exports = server;