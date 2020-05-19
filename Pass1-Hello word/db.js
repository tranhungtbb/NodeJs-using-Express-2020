const FileSync = require('lowdb/adapters/FileSync');
const low = require('lowdb');

const adapter = new FileSync('data.json');
const db = low(adapter);
db.defaults({users : []}).write();
module.exports=db;