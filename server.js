const express = '?'; // TODO
const routes = require('./routes');
const sequelize = '?'; // TODO

const app = '?'; // TODO
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db (via Sequelize) and listen on the server
// TODO
