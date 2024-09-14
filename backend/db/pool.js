const initOptions = {
  // global event notification;
  error(error, e) {
    if (e.cn) {
      // A connection-related error;
      //
      // Connections are reported back with the password hashed,
      // for safe errors logging, without exposing passwords.
      console.error('CN:', e.cn);
      console.error('EVENT:', error.message || error);
    }
  }
}

const pgp = require('pg-promise')(initOptions);

const cn = `postgres://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`;
console.log(`Database connected to ${cn}`);

const db = pgp(cn); // database instance;

console.log(`Connected to DB ${cn}`);

module.exports = {db};
