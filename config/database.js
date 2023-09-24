const mongoose = require('mongoose');
const { connect } = require('../routes');
require('dotenv').config()

const USER = `howardjake`
const PASS = `uy85p4hRb4VT7HxJ`


// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(`mongodb+srv://${USER}:${PASS}@cluster0.tpziwoz.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
