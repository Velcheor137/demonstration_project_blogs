module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static NotFound(apiRequested){
        return new ApiError(404, `Обращение к несуществующему API ${apiRequested} .`);
    }

    static NotFoundOther(message){
        return new ApiError(404, message);
    }

    static Conflict(message, errors = []){
        return new ApiError(409, message, errors);
    }

    static InternalError(message, errors = []) {
        return new ApiError(500, message, errors);
    }

}