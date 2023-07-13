import  express  from "express";
import db from "./config/dbConnect.js"
import route from "./routes/index.js";

//.ENV
import configDotenv from "dotenv";
configDotenv.config();

//CONXAO BANCO
db.on("error",console.log.bind(console,"error ao conectar"))
db.once("open",()=>{
    console.log('Conexão feita com Sucesso')
})

//server 
const app = express()

//usar json
app.use(express.json())

//rotas
route(app)

export default app;