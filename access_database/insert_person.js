
const Person= require("../modelperson");
// mo ta test

var per = new Person({
    name:"hoanhai97",
    height:23,
    weight:40
});
per.save(function(err){
    if(err) return handleError(err);
});