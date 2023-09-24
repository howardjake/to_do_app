// Require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const session = require('express-session')
const port = process.env.PORT || 3000; 
const indexRouter = require('./routes/index');
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const dashRouter = require('./routes/dashboard');

const app = express();

// Connect to DB
require('./config/database');

// Configure app settings
app.set('view engine', 'ejs');

// Mount middleware
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

// Mount routes with app.use()
app.use('/', indexRouter);
app.use("/home", homeRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashRouter);

// Tell app to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});
