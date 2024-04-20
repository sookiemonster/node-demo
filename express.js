var express = require("express");
var exphbs = require('express-handlebars');
var app = express();
var port = 5000;
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port, "!"));
});
