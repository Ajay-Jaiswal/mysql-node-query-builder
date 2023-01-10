const QueryBuilder = require('node-querybuilder')
require('dotenv').config()
const pass = process.env.PASSWORD

const settings = {
    host : 'localhost',
    database: "winter",
    user: "root",
    password:pass
}
module.exports.dbConn   =  new QueryBuilder(settings, 'mysql', "pool")