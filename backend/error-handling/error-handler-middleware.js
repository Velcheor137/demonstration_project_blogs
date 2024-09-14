const ApiError = require('../exceptions/api-error');
const getErrorLogMessage = require('./error-log-message');

module.exports = function (err, req, res, next) {
    let message = 'Непредвиденная ошибка';
    let errors = null;
    let status = 500;

    if (err instanceof ApiError) {
        message = err.message;
        errors = err.errors;
        status = err.status;
    }
    if (err instanceof SyntaxError){
        message = err.message;
        errors = err.errors;
        status = 400;
    }

    const messageToReturn = {error: { message: message, ...(errors != null ? {errors: errors} : {}) }};

    console.log(getErrorLogMessage(err, status, JSON.stringify(messageToReturn), req));

    return res.status(status).json(messageToReturn)
};