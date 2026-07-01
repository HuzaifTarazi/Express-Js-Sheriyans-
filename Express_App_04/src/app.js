import express, { json } from "express";
import postModel from "./models/post.model.js";
import multer, { memoryStorage } from "multer";
import uploadToCloudinary from "./utils/uploadToCloudinary.js";

const app = express();
const upload = multer({ storage: memoryStorage() });

app.post("/create-post", upload.single("imageUrl"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        sccuess: false,
        message: "Image is required",
      });
    }

    const result = await uploadToCloudinary(req.file.buffer);
    console.log(result);

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully.",
      image: result.secure_url,
      publicId: result.public_id,
    });
  } catch (err) {
    console.error("Cloudinary Upload Failed: ", err);

    return res.status(500).json({
      success: false,
      message: "Failed to upload image",
      error: err.message,
    });
  }
});

export default app;
