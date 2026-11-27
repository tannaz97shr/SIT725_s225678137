const mongoose = require("mongoose");
const Service = require("./models/Service");

const sampleServices = [
  {
    name: "Classic Haircut",
    category: "Hair",
    description: "A professional haircut and styling service.",
    price: 35,
    duration: 30,
    image: "/images/haircut.jpg",
    isAvailable: true,
  },
  {
    name: "Beard Trim",
    category: "Grooming",
    description: "Beard shaping and grooming.",
    price: 20,
    duration: 20,
    image: "/images/beard.jpg",
    isAvailable: true,
  },
  {
    name: "Hair Colouring",
    category: "Colour",
    description: "Professional hair colouring service.",
    price: 85,
    duration: 90,
    image: "/images/colouring.jpg",
    isAvailable: true,
  },
  {
    name: "Hair and Beard Package",
    category: "Packages",
    description: "A complete haircut and beard grooming session.",
    price: 50,
    duration: 50,
    image: "/images/haircut.jpg",
    isAvailable: true,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/salonbookDB");

    await Service.deleteMany({});
    await Service.insertMany(sampleServices);

    console.log("SalonBook sample services inserted");
  } catch (error) {
    console.error("Failed to seed database:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
