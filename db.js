const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const low = require("lowdb");

var db = low(adapter);
db.defaults({ users: [], session:[] })
    .write();

module.exports= db;
