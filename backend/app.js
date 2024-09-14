const express = require('express');
const timeout = require('connect-timeout');
const cors = require('cors');

//const cookieParser = require('cookie-parser')
const errorHandlerMiddleware = require('./error-handling/error-handler-middleware');
const unknownRouteMiddleware = require('./error-handling/unknown-route-middleware');

const app = express();

const PORT =   process.env.PORT || 8234;
const ORIGIN = process.env.CLIENT_URL || "http://localhost:8233";

// Setting timeout parameters
function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

app.use(timeout('50s'));
app.use(haltOnTimedout);
app.use(express.json());
//app.use(cookieParser());

 app.use(cors({
     credentials: true,
     origin: ORIGIN
 }));

//-- Adding routes --
app.use('/api', require('./router'));

// Error handling and logging
app.use(errorHandlerMiddleware);
app.use(unknownRouteMiddleware);


module.exports = app;
