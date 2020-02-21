const mongoose = require('mongoose');
const { Schema } = mongoose;

const  MesaSchema =new  Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    status: {type: String, required:true},
    encargado: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Mesa", MesaSchema);
