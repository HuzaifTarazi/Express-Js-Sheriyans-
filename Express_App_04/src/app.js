import express, { json } from "express";
import postModel from "./models/post.model.js";
import multer, { memoryStorage } from "multer";
import streamifier from "streamifier"
import cloudinary from "./config/cloudinary.js";

const app = express();
const upload = multer({ storage: memoryStorage() });

app.post("/create-post", upload.single("imageUrl"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image file uploaded" });
  }

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: "Express_app" },
    (error, result) => {
      if (error) {
        console.error("Cloudinary upload failed:", error);
        return res.status(500).json({ error: "Cloudinary upload failed", details: error });
      }

      console.log(result);
      res.status(201).json({ message: "Uploaded successfully", result });
    }
  );

  streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
});

export default app;
