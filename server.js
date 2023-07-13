import app from "./src/app.js";

const port = process.env.PORT;

app.listen(3000,()=>{
    console.log(`Servidor Rodando na Porta : ${port}`)
})