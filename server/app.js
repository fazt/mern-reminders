import express from "express";
import morgan from "morgan";
import path from "path";
import cors from 'cors'

import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(cors())

// Routes
app.use("/api/tasks", tasksRoutes);

// Static Files
app.use(express.static(path.resolve("public")));

export default app;
