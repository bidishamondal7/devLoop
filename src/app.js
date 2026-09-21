const express = require("express");
const app = express();

// Middlewares
const {adminAuth, userAuth} = require("./middlewares/auth");
app.use("/admin", adminAuth);
app.get("/admin/getAllUser", (req, res, next) => {
  throw new Error("This is an error in getAllUser route");
  res.send("This is the getAllUser route");
});
app.delete("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.get("/user/getProfile",userAuth, (req, res) => {
  res.send("This is the getProfile route");
});

//Error handlers
app.use("/",(err, req, res, next)=>{
if(err){
  res.status(500).send("Internal Server Error");
}
});


//Server is listening
app.listen(7777, () => {
  console.log("Server is running on port 7777!!!")
});
