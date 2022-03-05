require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);

const projectName = "pictureApp";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

// Locals -----------------------------------
app.locals.title = `${capitalized(projectName)}`;
app.locals.mapBoxToken = process.env.MAPBOX_ACCESS_TOKEN;

// Routes -----------------------------------
const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

const pictureAppRoutes = require("./routes/pictureApp");
app.use("/pictureApp", pictureAppRoutes);

require("./error-handling")(app);

module.exports = app;
