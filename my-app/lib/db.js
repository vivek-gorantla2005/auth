import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
