const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
const port = 5000;

// Set app to use handlebar module
app.set('view engine', 'handlebars');

// Configure handlebar module settings
app.engine('handlebars', exphbs({
   layoutsDir: __dirname + '/views/layouts',
}));

// Set route for main page
app.get("/", function (req, res) {
   res.render('main', {layout : 'index'});
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});