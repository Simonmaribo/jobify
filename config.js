require('dotenv').config()
const pjson = require('./package.json')

module.exports = {
    version: pjson.version,
    database: {
        name: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
    },
    jwt: process.env.JWT_SECRET
}