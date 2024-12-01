import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connect = await mongoose.connect(String(process.env.MONGODB_URI));
    // console.log(process.env.MONGODB_URI);
    return connect;
  } catch (error) {
    // console.error("MongoDB connection failed:", error.message);
    throw new Error(error.message);
  }
}
