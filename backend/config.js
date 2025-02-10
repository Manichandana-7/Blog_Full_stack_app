const mongoose = require('mongoose');
require('dotenv').config();  
const connectDB = async () => {
const uri = process.env.MONGO_URL;
console.log("config file");
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    process.exit(1); 
  }
};
module.exports = connectDB;
