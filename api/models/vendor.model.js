import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    carNumber: {
      type: String,
    //   required: true,
    //   unique: true,
    },
    carModel: {
      type: String,
    //   required: true,
    },
    departure: {
      type: String,
    //   required: true,
    },
    destination: {
      type: String,
    //   required: true,
    },
    // carImages: {
    //   type: String,
    // },
  },

  { timestamps: true }
);

const Vendor = mongoose.model("Vendor", userSchema);

export default Vendor;
