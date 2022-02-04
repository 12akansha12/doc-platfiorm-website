const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signin-signup/login.html");
});

app.get("/sign-up", function(req, res) {
    res.sendFile(__dirname + "/signin-signup/signup.html");
})

app.listen(3000, function(res, req) {
  console.log("Server started on port 3000");
});

