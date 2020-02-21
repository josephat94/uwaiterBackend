const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoOrdenSchema =new Schema({
    instruccionesEspeciales: { type: String},
    cantidad:{type:Number, required:true},
    producto: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
    encargado: {type: mongoose.Schema.Types.ObjectId, ref: "Orden"}
})

module.exports = mongoose.model("ProductoOrden", ProductoOrdenSchema);
