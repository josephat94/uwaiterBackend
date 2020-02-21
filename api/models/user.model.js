const mongoose = require('mongoose');
const { Schema } = mongoose;

const  UserSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    pwd: { type: String, required: true },
    rol: {type: mongoose.Schema.Types.ObjectId, ref: "Rol"}
})

module.exports = mongoose.model("User", UserSchema);
