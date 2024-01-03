const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

// const URI = process.env.MONGODB_URI;
const URI = "mongodb+srv://mernuser:F82bYpqliihnTPOL@cluster0.tegyqv6.mongodb.net/mern_admin?retryWrites=true&w=majority"

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;