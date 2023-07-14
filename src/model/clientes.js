import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema(
    {
        id:{type:String},
        nome:{type:String , required:true},  
        telefone:{type:String,required:true} 
    },
    { 
        versionKey: false
    } 
);

const clientes = mongoose.model('clientes',clientesSchema)

export default clientes;