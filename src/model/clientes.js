import mongoose from "mongoose";

const clientesSchema = new mongoose.Schema(
    {
        nome:{type:String , required:true},  
        id:{type:String},
        telefone:{type:String,required:true}
    },
    { 
        versionKey: false
    } 
);

const clientes = mongoose.model('clientes',clientesSchema)

export default clientes;