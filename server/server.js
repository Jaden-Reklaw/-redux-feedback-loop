const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));
//Used to allow JSON for items being received from front end like body parser middleware
app.use(express.json({limit: '1mb'}));

/** ---------- EXPRESS ROUTES ---------- **/
const surveyRouter = require('./routes/survey.router');
app.use('/api/survey', surveyRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});