const express = require("express");
const app = express();

//Handling server - request handler
// app.use("/", (req, res) => {
//   res.send("Hello from root");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from the server side");
// });

app.get("/user", (req, res) => {
  res.send("User data");
});
app.post("/user", (req, res) => {
  res.send("User data has been created");
});
app.patch("/user", (req, res) => {
  res.send("User data has been updated specific data");
});

app.put("/user", (req, res) => {
  res.send("User data has been replaced");
});
app.delete("/user", (req, res) => {
  res.send("User data has been deleted");
});

//Server is listening
app.listen(7777, () => {
  console.log("Server is running on port 7777!!!");
});
