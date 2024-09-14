const ApiError = require('../exceptions/api-error');

function typeAssertion(value, type){
    if (type != null && value != null){
        if (value.constructor != type){
            throw ApiError.BadRequest(`${value} is not a ${type}.`);
        }
    }
    return value;
}

function queryParamAssertion(req, param){
    if (req.query[param] == null){
        throw ApiError.BadRequest(`Missing param ${param}.`);
    }
}

function paramAssertion(req, param, type) {
    if (req.body[param] == null){
        throw ApiError.BadRequest(`Missing ${param}.`);
    }
    typeAssertion(req.body[param], type);
}

function fileAssertion(req, file){
    if (req.files == null || req.files[file] == null){
        throw ApiError.BadRequest(`Missing file field ${file}.`);
    }
}

module.exports = {
    paramAssertion: paramAssertion,
    fileAssertion: fileAssertion,
    queryParamAssertion: queryParamAssertion,
    typeAssertion: typeAssertion
}
