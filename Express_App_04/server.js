import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/db/db.js";

app.listen(3000, () => {
  console.log("Server is Running On Port 3000...");
});

connectDB();
