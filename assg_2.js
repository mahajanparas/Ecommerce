var exp = require('express');
var app = exp();

app.listen(8888,function(){
    console.log("server started on port 8888");
});

app.get('/welcome',function(req,res){
    res.send("<h1>Welcome to Web App</h1>");
});