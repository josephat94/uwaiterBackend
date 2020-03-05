

let User = require("../models/user.model");

exports.getUsers = (req, res) => {
    User.find({}).populate("rol", "nombre") .then((users) => {
        res.json({ ok: true, users: users })
    }).catch((e) => {
        console.log(e);
        res.json({ ok: false, err: e });
    })
}
exports.createUser = (req, res) => {
    const { body } = req;

    let newUser = {
        nombre: body.nombre,
        correo: body.correo,
        pwd: body.pwd,
        rol: body.rol
    }
    let userdb = new User(newUser);
    userdb.save().then((doc) => {
        res.json({ ok: true, user: doc })
    })
        .catch(err => { res.json({ ok: false, err: err }) })

}