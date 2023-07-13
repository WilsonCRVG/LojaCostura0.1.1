import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema(
    {
        nome:{type:String , required:true},  
        telefone:{type:String,required:true} 
    },
    {   
        _id: false,     // Opção para excluir o campo _id
        versionKey: false
    } 
);

const clientes = mongoose.model('clientes',clientesSchema)

export default clientes;