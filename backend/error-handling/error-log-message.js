module.exports = (err, status, returned_message, req) =>{
    const route = req.originalUrl;
    let reqBody = JSON.stringify(req.body);
    if (route=='/api/login')
        reqBody = reqBody.replace(/"password":".+"/, '"password":"*****"');
    return `Handled error:{
        error: {
            ${err.stack}
        },
        status: ${status},
        returned message: ${returned_message},
        ip: ${req.ip},
        route: ${route},
        reqBody: ${reqBody}
        }`
}
