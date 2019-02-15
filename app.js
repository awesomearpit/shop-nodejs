const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
// console.dir(app.use);

// add bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false })); // extended :true -- for all values and bytes

app.get("/login", (request, response) => {
  console.log(request.query);
  var userid = request.query.userid;
  console.log("userid", userid);
  var pwd = request.query.pwd;
  if (userid == pwd) {
    response.send("welcome " + userid);
  } else {
    response.send("Invalid Userid or Password");
  }
});

app.post("/login", (request, response) => {
  console.log("body is", request.body);
  var userid = request.body.userid;
  console.log("userid", userid);
  var pwd = request.body.pwd;
  if (userid == pwd) {
    response.send("welcome " + userid);
  } else {
    response.send("Invalid Userid or Password");
  }
});
app.listen(process.env.PORT || 1234, err => {
  if (err) {
    throw err;
  } else {
    console.log("Server Start....");
  }
});
