import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://huzaiftarazi14_db_user:o0DkgLl3QTnGBYfB@practice1.ezcsvhw.mongodb.net/express_app_04",
  );

  console.log("Database Connected Successfully...");
};

export default connectDB;
