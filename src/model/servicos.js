import mongoose from "mongoose";
import { DataFormatada } from "../config/dateConfig.js";

const servicosSchema = mongoose.Schema(
    {   
        id:{type:String},
        cliente:{type: mongoose.Schema.Types.ObjectId,ref:'clientes',required:true},
        tipo:{type:String, required:true},
        valor:{type:Number , required:true},
        dataInicio:{type:Date , default:Date.now},
        dataEntrega:{type:Date, require:true}
    },
    { 
        versionKey: false
    }
);

const servicos = mongoose.model('servicos',servicosSchema);

export default servicos;