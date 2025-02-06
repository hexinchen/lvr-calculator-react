const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const itemsRoutes = require("./routes/itemsRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/items", itemsRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;
