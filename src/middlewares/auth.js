const adminAuth = (req, res, next) => {
  console.log("This is the middleware for /admin route");
  // res.send("This is the admin route");
  const token = "abc";
  if (token !== "abc") {
    res.status(401).send("Unauthorized");
  }
  next();
};
const userAuth = (req, res, next) => {
  console.log("This is the middleware for /user route");
  // res.send("This is the user route");
  const token = "def";
  if (token !== "def") {
    res.status(401).send("Unauthorized");
  }
  next();
};

module.exports = { adminAuth, userAuth };
