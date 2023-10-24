import mongoose from "mongoose";

async function conectaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.mjfsigg.mongodb.net/e-commerce?retryWrites=true&w=majority")
    return mongoose.connection
}

export default conectaDatabase
