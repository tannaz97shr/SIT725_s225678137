const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Simple GET endpoint for testing
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "SalonBook server is running",
  });
});

const services = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "A professional haircut and styling service.",
    price: 35,
    duration: 30,
    image: "/images/haircut.jpg",
  },
  {
    id: 2,
    name: "Beard Trim",
    description: "Beard shaping and grooming.",
    price: 20,
    duration: 20,
    image: "/images/beard.jpg",
  },
  {
    id: 3,
    name: "Hair Colouring",
    description: "Professional hair colouring service.",
    price: 85,
    duration: 90,
    image: "/images/colouring.jpg",
  },
];

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.listen(PORT, () => {
  console.log(`SalonBook running at http://localhost:${PORT}`);
});
