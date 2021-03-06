'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const signUpRouter = require('./routes/signUp.js');
const logInRouter = require('./routes/logIn.js');
const mainRouter = require('./routes/main.js');
const googleLogInRouter = require('./routes/googleLogIn.js');
const githubLogInRouter = require('./routes/githubLogIn.js');

const PORT = process.env.PORT || 8081;

app.use('/src', express.static(path.resolve(__dirname, '..', 'src')));
app.use(express.json());
app.use(cookieParser());

app.use('/', mainRouter);
app.use('/sign-up', signUpRouter);
app.use('/login', logInRouter, googleLogInRouter, githubLogInRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'src', 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;