// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
// Here you should import the required packages for your Express app: `express` and `morgan`

// CREATE EXPRESS APP
const app = express();

// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:

// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () =>
  console.log("Server is runnning on http://localhost:5005")
);

// Create Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Create Blog Route
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// Json Data for Projects
app.get("/api/projects", (req, res) => {
  res.sendFile(__dirname + "/data/projects.json");
});

// Json Data for Articles
app.get("/api/articles", (req, res) => {
  res.sendFile(__dirname + "/data/articles.json");
});

// Create a 404 Route
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
