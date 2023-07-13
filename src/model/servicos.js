import mongoose from "mongoose";

const servicosSchema = mongoose.Schema(
    {
        tipo:{type:String,required:true},
        valor:{type:Number , required:true},
        data:{type:Date}
    },
    { _id: false }
);

const servicos = mongoose.model('servicos',servicosSchema);

export default servicos;