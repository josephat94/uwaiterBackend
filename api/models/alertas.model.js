const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlertaSchema = new Schema({
    nombre: { type: String, required: true },
    status: { type: String, required: true },
    encargado: {type:mongoose.Schema.Types.ObjectId, ref: "User"},
    mesa: {type:mongoose.Schema.Types.ObjectId,ref:"Mesa"}
})

module.exports = mongoose.model("Alerta", AlertaSchema);
