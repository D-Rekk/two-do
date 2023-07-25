import mongoose from "mongoose";

const retryAttempts = 5;
const retryInterval = 1000; // 1 second

const connectMongoDB = async (attempt = 1) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    console.log("Connected to MongoDB");

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);

    if (attempt < retryAttempts) {
      console.log(`Retrying connection in ${retryInterval}ms...`);
      await new Promise((resolve) => setTimeout(resolve, retryInterval));
      await connectMongoDB(attempt + 1);
    } else {
      console.error(`Connection to MongoDB failed after ${retryAttempts} attempts.`);
    }
  }
};

export default connectMongoDB;
