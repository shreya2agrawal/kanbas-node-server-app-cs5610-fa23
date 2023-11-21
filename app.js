//const express = require("express");
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Database/courses/routes.js";
import ModuleRoutes from "./Database/Modules/routes.js";

const app = express();
app.use(cors());
CourseRoutes(app);
ModuleRoutes(app);
app.use(express.json());
Lab5(app);
HelloRoutes(app); // to pass all the hello routes in app

// app.get("/hello", (req,res) => {
//     res.send("Hello World!");
// });
// app.get("/", (req, res) => {
//     res.send("Welcome to web development!");
// });

// app.listen(4000);

app.listen(4000, (err) => {
    if (err) {
      console.error("Error starting server:", err);
    } else {
      console.log("Server started on port 4000");
    }
  });

// calls HTTP Server
// server is waiting forever for incoming request
