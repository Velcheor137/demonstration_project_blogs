#!/usr/bin/node
require('dotenv').config({path: __dirname + '.env'});

const PORT = process.env.PORT || 8234;

const app = require('./app');

app.listen(PORT, function () {
    console.log(`Aurora notifier backend listening on port ${PORT}`);
    //console.log(`Aurora CORS Policy ${process.env.CLIENT_URL}`);
});
