const express = require("express");
const app = express();

//Handling server - request handler
app.use("/test", (req, res) => {
  res.send("Hello from the server side");
});

//Server is listening
app.listen(7777, () => {
  console.log("Server is running on port 7777!!!");
});
