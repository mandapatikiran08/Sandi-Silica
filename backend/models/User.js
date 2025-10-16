import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    companyName: {
      type: String, // optional
    },
    address: {
      type: String, // optional
    },
    password: {
      type: String,
      required: true, // hashed password
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const User = mongoose.model("User", userSchema);

export default User;
