const express = require("express");
const path = require("node:path");
const mongoose = require("mongoose");
const Service = require("./models/Service");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "SalonBook server is running",
  });
});

// Retrieve available services from MongoDB
app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find({
      isAvailable: true,
    }).lean();

    res.json(services);
  } catch (error) {
    console.error("Error loading services:", error);
    res.status(500).json({
      error: "Unable to load services",
    });
  }
});

async function startServer() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/salonbookDB");

    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`SalonBook running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exitCode = 1;
  }
}

startServer();
