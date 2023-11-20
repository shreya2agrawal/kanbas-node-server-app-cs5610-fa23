function HelloRoutes(app) {
  app.get("/hello", (req, res) => {
    res.send("Life is good!");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to web development!");
  });
  console.log("Hello, World!!");
}

export default HelloRoutes;
