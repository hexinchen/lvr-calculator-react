const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const itemsRoutes = require("./routes/itemsRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", itemsRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;
