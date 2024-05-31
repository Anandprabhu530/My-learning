import mongoose from "mongoose";

export const User = mongoose.model("User", { email: String, password: String });
export const data = mongoose.model("Data", { field1: String, filed2: String });
