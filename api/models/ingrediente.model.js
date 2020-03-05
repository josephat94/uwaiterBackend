const mongoose = require('mongoose');
const { Schema } = mongoose;

const  IngredienteSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    medida: {type: String, required:true}, //gr ml lt kg
    cantidadExistente: {type:Number, required:true},
    cantidadAceptable:{type:Number, required:true}, //En que punto se debe enviar una alerta
})  

module.exports = mongoose.model("Ingrediente", IngredienteSchema);
