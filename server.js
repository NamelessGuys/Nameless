require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

// Initialise app
const app = express();
// Connect Database
connectDB();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/settings", require("./routes/api/settings"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/tags", require("./routes/api/tags"));

//Serve static assets in production
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
