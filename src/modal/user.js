import mongoose ,{Schema} from "mongoose";


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

export const User = mongoose.models?.User ??  mongoose.model("User", userSchema);
