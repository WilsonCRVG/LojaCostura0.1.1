import mongoose from "mongoose";

const servicosSchema = mongoose.Schema(
    {   
        id:{type:String},
        cliente:{type: mongoose.Schema.Types.ObjectId,ref:'clientes',required:true},
        tipo:{type:String, required:true},
        valor:{type:Number , required:true},
        dataInicio:{type:Date}
    },
    { 
        versionKey: false
    } 
);

const servicos = mongoose.model('servicos',servicosSchema);

export default servicos;