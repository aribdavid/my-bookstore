const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');
const { user, login, order } = require('./router/index.js')


const app = express();

app.use(cors());
app.use(bodyParser.json());

require('dotenv/config');
const port = process.env.PORT;

app.use(express.json());

app.use('/',user);
app.use('/', login);
app.use('/', order);

// app.use(errorHandler);

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
