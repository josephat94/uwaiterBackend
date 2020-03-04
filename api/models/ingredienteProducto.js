const mongoose = require('mongoose');
const { Schema } = mongoose;

const  IngredienteProductoSchema = new Schema({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true },
    ingrediente:{type: mongoose.Schema.Types.ObjectId, ref: "Ingrediente"}    
})  

module.exports = mongoose.model("IngredienteProducto", IngredienteProductoSchema);
