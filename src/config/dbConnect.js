import mongoose from "mongoose";

import configDotenv from "dotenv";
configDotenv.config();

//const dbConfig = process.env.DB_CONFIG;

// Conexão com o MongoDB
mongoose.connect("mongodb+srv://wilsoncrvg1994:1346798520v@cluster0.enzk5cj.mongodb.net/costura")

let db = mongoose.connection;

export default db;