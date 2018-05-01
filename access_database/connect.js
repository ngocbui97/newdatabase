const mongo = require("mongoose");
mongo.Promise=global.Promise;


    mongo.connect("mongodb://localhost/itwork");
    var db= mongo.connection;
    db.on('error',console.error.bind(console,"error conect!!"))




