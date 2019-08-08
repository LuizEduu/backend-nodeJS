const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);


server.listen(3333); // qual porta o servidor vai ouvir