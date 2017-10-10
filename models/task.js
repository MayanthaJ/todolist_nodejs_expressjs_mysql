var db = require('../config/dbcon.js')

var task={
    getAllTasks:function(callback){
        return db.query("SELECT * FROM todo",callback);
    }
}

module.exports = task;