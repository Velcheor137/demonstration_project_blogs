function makeLinkGlobal(link) {
    if (link != null) {
        if (link[0]=='/') {
            link = (process.env.WEB_PAGE_ADDRESS || '') + link;
        }
    }
    return link
}

function createLogObject(title, channel, adr, destination_id, type, result, error=null) {
    const log_object = {
        timestamp: (new Date()).toLocaleString(),
        title: title,
        channel: channel,
        adr: adr,
        destination_id: destination_id,
        type: type,
        result: result,
    };
    console.log('Notification: ', log_object);
    if (error) console.log(error);
    return log_object;
}

module.exports = {
    makeLinkGlobal: makeLinkGlobal,
    createLogObject: createLogObject
}
