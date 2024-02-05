import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Enter a valid Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter a valid Email"],
    },
  },
  { timestamp: true }
);

// password hash
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.checkPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

export default User;
