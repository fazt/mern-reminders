import mongoose from "mongoose";

const URI = "mongodb://localhost/mern-crud-test";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log("DB is connected", conn.connection.host);
  } catch (error) {
    console.log(error);
  }
};
