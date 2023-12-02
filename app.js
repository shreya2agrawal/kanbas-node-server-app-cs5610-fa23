//const express = require("express");
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import EnrollmentRoutes from "./enrollments/routes.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import UserRoutes from "./users/routes.js";
import session from "express-session";
import LikesRoutes from "./likes/routes.js";
import FollowsRoutes from "./follows/routes.js";
import SectionRoutes from "./sections/routes.js";

const app = express();
app.use(cors({
  credentials:true,
  origin: process.env.FRONTEND_URL
}));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(express.json());

FollowsRoutes(app);
LikesRoutes(app);

CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

Lab5(app);
HelloRoutes(app); // to pass all the hello routes in app

SectionRoutes(app);
EnrollmentRoutes(app);

// app.get("/hello", (req,res) => {
//     res.send("Hello World!");
// });
// app.get("/", (req, res) => {
//     res.send("Welcome to web development!");
// });

// app.listen(4000);

app.listen(process.env.PORT || 4000, (err) => {
    if (err) {
      console.error("Error starting server:", err);
    } else {
      console.log("Server started on port 4000");
    }
  });

// calls HTTP Server
// server is waiting forever for incoming request
