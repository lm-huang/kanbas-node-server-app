/** @format */

import express from "express";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session"


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(cors({credentials: true,
        origin: process.env.FRONTEND_URL ?
            new RegExp(`.*${process.env.FRONTEND_URL}.*`) : "http://localhost:3000",
    }
));

const sessionOptions = {
    secret: "any string", resave: false, saveUninitialized: false,
};
if (process.env.FRONTEND_URL) {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none", secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
