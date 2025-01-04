import mongoose from "mongoose";
import { Schema } from "mongoose";

// Define schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String },
    authProviderId: { type: String },
});

// Use mongoose.models.User if it exists, otherwise create the model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User };
