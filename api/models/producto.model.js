const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema =new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio:{type:Number, required:true},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: "Categoria"},
    ingredientesProducto: [
            {cantidad: Number, 
            ingrediente:{type: mongoose.Schema.Types.ObjectId, ref: "Ingrediente"}}
    ]

})

module.exports = mongoose.model("Producto", ProductoSchema);
