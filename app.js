const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view-engine", 'ejs');

var workspaces = [];
var files = [];
var userEmail;

app.get("/sign-in", function(req, res) {
    res.render("login.ejs");
});

app.get("/sign-up", function(req, res) {
    res.render("signup.ejs");
});
app.get("/workspace", function(req, res) {
  res.render("workspace.ejs", {files: files});
});

app.get("/", function(req, res) {
  res.render("welcome.ejs", {workspaces_list: workspaces});
});

app.get("/workspace/:file", function(req, res) {
  const requestedFile = req.params.file;
  for(let i=0; i<files.length; i++) {
    if(files[i].name === requestedFile) {
      // console.log(files[i].content);
      res.render("showFile.ejs", {files: files, name: files[i].name, content: files[i].content})
    }
  }
  // res.render("")
})

app.get("/dashboard", function(req, res) {
  res.render("dashboard.ejs", {workspaces_list: workspaces, useremail: userEmail})
})

app.post("/api/register", function(req, res) {
  // userEmail = req.body.email;
  // console.log(req.body);
  res.json({status: 'ok'})
})

app.post("/api/login", function(req, res) {
  // console.log(req.body.email);
  userEmail = req.body.email;
  res.json({status: 'ok'})
  // res.redirect("/dashboard");
})

app.post("/dashboard", function(req, res) {
  workspaces.push(req.body.new_workspace);
  res.redirect("/dashboard");
})

app.post("/api/saveFileAndContent", function(req, res) {
  let filename = req.body.filename;
  let filecontent = req.body.filecontent;
  let obj = {
    name: filename,
    content: filecontent
  };
  files.push(obj);
})


//------------------------------------------/


app.listen(3000, function(res, req) {
  console.log("Server started on port 3000");
});
