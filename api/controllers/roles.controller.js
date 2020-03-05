let Roles = require("../models/rol.model");

exports.getRoles = (req, res) => {
    Roles.find({}).then((roles) => {
        res.json({ ok: true, roles: roles })
    }).catch((e) => {
        console.log(e);
        res.json({ ok: false, err: e });
    })
}
exports.createRol = (req, res) => {
    const { body } = req;
    let newRol = {
        nombre: body.nombre,
        descripcion: body.descripcion,
    }
    let roldb = new Roles(newRol);
    roldb.save().then((doc) => {
        res.json({ ok: true, rol: doc })
    })
        .catch(err => { res.json({ ok: false, err: err }) })

}