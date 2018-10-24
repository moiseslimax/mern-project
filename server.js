const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//body-parser mid
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect(db)
    .then (() => console.log('mongodb connected'))
    .catch(err => console.log('Erro de conexão: ', err));

//use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));