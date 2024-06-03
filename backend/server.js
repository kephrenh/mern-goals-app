const express = require("express");
const dotenv = require("dotenv").config();
const serverRoutes = require("./routes/root.routes");
const goalRoutes = require("./routes/goal.routes");
const { errorHandler } = require("./middlewares/error.middleware");
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET server route
app.use("/", serverRoutes);

// API Goals routes
app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
