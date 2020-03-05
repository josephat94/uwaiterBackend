const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt =require("bcryptjs");

const  UserSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    pwd: { type: String, required: true },
    rol: {type: mongoose.Schema.Types.ObjectId, ref: "Rol"}
})


UserSchema.pre('save', function(next) {
	let user = this
	if(this.isModified('pwd') || this.isNew) {
		bcrypt.genSalt(10, (err, salt) =>{
			if(err) { return next(err) }
				bcrypt.hash(user.pwd, salt, (err, hash) => {
					if(err) { return next(err) }
						user.pwd = hash
						next()
				})
		})
	} else {
		return next()
	}
})

UserSchema.methods.comparePassword = function(pw) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(pw, this.pwd, (err, isMatch) => {
			if(err) reject(err)
				resolve(isMatch)
		})
	})
}

module.exports = mongoose.model("User", UserSchema);
