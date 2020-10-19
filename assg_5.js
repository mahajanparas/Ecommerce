var exp = require('express');
var app = exp();

app.listen(8888, function () {
    console.log("server started on port 8888");
});

app.get('/welcome', function (req, res) {
    res.send("<h1>Welcome to Web App</h1>");
});

app.get('/login.html', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.get('/login', function (req, res) {
    console.log(req.query.id);
    console.log(req.query.pwd);

    if ((req.query.id == "object") && (req.query.pwd == "knowit"))
        res.send("<h1>Login successful</h1>");
    else
        res.send("<h1 style='color:red;' >Check userid/password</h1>");

});

app.get('/login/:id/:pwd', function (req, res) {
    console.log(req.params.id);
    console.log(req.params.pwd);

    if ((req.params.id == "object") && (req.params.pwd == "knowit"))
        res.send("<h1>Login successful</h1>");
    else
        res.send("<h1 style='color:red;' >Check userid/password</h1>");

});

app.all('/*', function (req, res) {
    res.send("<h1 style='color:red;'>invalid url</h1>");
});
