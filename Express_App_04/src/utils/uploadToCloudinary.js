import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "Express_App_04",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        return resolve(result);
      },
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

export default uploadToCloudinary;
