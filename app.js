// //const express = require("express");
// import express from "express";
// import HelloRoutes from "./hello.js";
// import Lab5 from "./Lab5.js";
// import cors from "cors";
// import CourseRoutes from "./courses/routes.js";
// import ModuleRoutes from "./modules/routes.js";
// import "dotenv/config";
// import mongoose from "mongoose";
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
// import UserRoutes from "./users/routes.js";

// const app = express();
// app.use(cors({
//   credentials:true,
//   origin: process.env.FRONTEND_URL
// }));
// app.use(express.json());
// CourseRoutes(app);
// ModuleRoutes(app);
// UserRoutes(app);
// Lab5(app);
// HelloRoutes(app); // to pass all the hello routes in app

// // app.get("/hello", (req,res) => {
// //     res.send("Hello World!");
// // });
// // app.get("/", (req, res) => {
// //     res.send("Welcome to web development!");
// // });

// // app.listen(4000);

// app.listen(process.env.PORT || 4000, (err) => {
//     if (err) {
//       console.error("Error starting server:", err);
//     } else {
//       console.log("Server started on port 4000");
//     }
//   });

// // calls HTTP Server
// // server is waiting forever for incoming request

// const express = require("express");
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
import cors from "cors";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();
app.use(cors());
app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
HelloRoutes(app);

app.listen(4000);