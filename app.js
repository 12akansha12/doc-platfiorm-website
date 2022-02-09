const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view-engine", 'ejs');

var workspaces = [];
var files = [];

app.get("/sign-in", function(req, res) {
    res.sendFile(__dirname + "/signin-signup/login.html");
});

app.get("/sign-up", function(req, res) {
    res.sendFile(__dirname + "/signin-signup/signup.html");
});
app.get("/workspace", function(req, res) {
  res.render("workspace.ejs", {files: files});
});

app.get("/", function(req, res) {
  res.render("welcome.ejs", {workspaces_list: workspaces});
});

app.post("/", function(req, res) {
  workspaces.push(req.body.new_workspace);
  res.redirect("/");
});

app.get("/texteditor", function(req, res) {
  res.render("texteditor");
})

app.post("/", function(req, res) {
  
  res.redirect("/");
});

app.post("/workspace", function(req, res) {
  let filename = req.body.filename;
  let filecontent = req.body.content;
  let obj = {
    name: filename,
    content: filecontent
  };
  files.push(obj);
  res.redirect("/workspace");
})

//------------------------------------------/

app.listen(3000, function(res, req) {
  console.log("Server started on port 3000");
});

