const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdenSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    mesa: { type: mongoose.Schema.Types.ObjectId, ref: "Mesa" },
    cliente: { type: String },
    productosOrden: [{ type: mongoose.Schema.Types.ObjectId, ref: "ProductoOrden" }],
    fechaInicio: { type: Date },
    fechaFin: { type: Date },
    total: { type: Number },
    estado:{type:String} //creada / ordenada / EnPreparacion / preparada / pagada
})

module.exports = mongoose.model("Orden", OrdenSchema);
