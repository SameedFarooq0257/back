import mongoose, { Mongoose } from "mongoose";
const userSchema = new Mongoose.schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "please enter email"],
  },
  password: {
    type: String,
    required: [true, "please enter password"],
  },
  role: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  VerifyToken: String,
  VerifyTokenExpiry: Date,
});
const User = mongoose.models.user || mongoose.models("users", userSchema);
export default User;
