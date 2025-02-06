const app = require("./src/app");
const port = process.env.PORT || 5000;

// // Connect to database
// connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
