const ApiError = require('../exceptions/api-error');
const getErrorLogMessage = require('./error-log-message');

module.exports = function (req, res) {
    const err = ApiError.NotFound(req.originalUrl);
    const messageToReturn = {error: { message: err.message }};

    console.log(getErrorLogMessage(err, 404, JSON.stringify(messageToReturn), req));

    return res.status(404).json(messageToReturn);
};
