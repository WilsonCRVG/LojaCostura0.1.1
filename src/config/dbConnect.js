import mongoose from "mongoose";

import configDotenv from "dotenv";
configDotenv.config();

//const dbConfig = process.env.DB_CONFIG;

// Conexão com o MongoDB
mongoose.connect(dbConfig)

let db = mongoose.connection;

export default db;
