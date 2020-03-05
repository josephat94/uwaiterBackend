const mongoose = require('mongoose');
const { Schema } = mongoose;

const  MesaSchema =new  Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    status: {type: String, required:true}, // Disponible / Ocupada 
    encargado: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Mesa", MesaSchema);
