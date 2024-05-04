import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then((res) => console.log("MongoDB connection successfull"));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
