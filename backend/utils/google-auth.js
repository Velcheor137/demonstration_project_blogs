const googleAuth = require('google-auth-library');
var fs = require('fs');

module.exports = function getGoogleAccessToken() {
    return new Promise(function(resolve, reject) {
        const key = JSON.parse(fs.readFileSync(process.env.GOOGLE_AUTH_FILE_PATH, 'utf8'));
        const jwtClient = new googleAuth.JWT(
            key.client_email,
            null,
            key.private_key,
            ['https://www.googleapis.com/auth/cloud-platform'],
            null
        );
        jwtClient.authorize(function(err, tokens) {
        if (err) {
            reject(err);
            return;
        }
        resolve(tokens.access_token);
        });
    });
}
