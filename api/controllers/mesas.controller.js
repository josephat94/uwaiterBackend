let Mesas = require("../models/mesa.model");

exports.getMesas = (req, res) => {
    Mesas.find({}).populate("encargado", "nombre").then((mesas) => {
        res.json({ ok: true, mesas: mesas })
    }).catch((e) => {
        console.log(e);
        res.json({ ok: false, err: e });
    })
}
exports.createMesa = (req, res) => {
    const { body } = req;
    let newMesa = {
        nombre: body.nombre,
        descripcion: body.descripcion,
        status: body.status,
        encargado: body.encargado
    }

    let mesadb = new Mesas(newMesa);
    mesadb.save().then((doc) => {
        res.json({ ok: true, mesa: doc })
    })
        .catch(err => { res.json({ ok: false, err: err }) })

}