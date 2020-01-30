const mongoose = require("mongoose");
const session = require("express-session");
const helmet = require("helmet");
var compression = require("compression");
let express = require ('express');
const bodyParser = require("body-parser");
var cors = require("cors");
let path = require("path");
var app = require("express")();
const xssFilter = require("x-xss-protection");
var http = require("http");

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV === "production") {
  app.get('*', function(req, res, next) {

    if (req.headers.host!== ("ofok.herokuapp.com")&& req.headers.host.match(/^www/) === null ) {
      res.redirect('https://www.' + req.headers.host+ req.url);
    } else {
      next();     
    }
  })
app.use(compression());
app.use(helmet());

// app.use(require('prerender-node').set('prerenderToken', 'XXmMcRFhr5Z9tAj2e2K0'));
//Passport Config

console.log("node env :==>", process.env.NODE_ENV);


  app.use(helmet.noSniff());

  app.use(helmet.hidePoweredBy({ setTo: "PHP 7.0.0" }));

  app.use(xssFilter());
}
app.use(cors());
app.use(bodyParser.json());
// Express session midleware
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));

if (process.env.NODE_ENV === "production") {
  mongoose
    .connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://SabriSelmi:10101992house*@ofok-jlrtq.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("mongodb connected..."))
    .catch(err => console.log(err));
} else {
  mongoose
    .connect(
      "mongodb+srv://SabriSelmiTest:10101992house*@ofok-test-pbl1i.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("mongodb connected..."))
    .catch(err => console.log(err));
}

app.use(express.static("uploads"));
app.use(require("./routes/"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", function(req, res) {
    const index = path.join(__dirname, "/client/build", "index.html");
    res.sendFile(index);
  });
}

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;