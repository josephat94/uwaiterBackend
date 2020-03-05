let Ingrediente = require("../models/ingrediente.model");

exports.getIngredientes = (req, res) => {
    Ingrediente.find({}).then((ingredientes) => {
        res.json({ ok: true, ingredientes: ingredientes })
    }).catch((e) => {
        console.log(e);
        res.json({ ok: false, err: e });
    })
}
exports.createIngrediente = (req, res) => {
    const { body } = req;
    let newIngrediente = {
        nombre: body.nombre,
        descripcion: body.descripcion,
        medida:body.medida,
        cantidadExistente:body.cantidadExistente,
        cantidadAceptable: body.cantidadAceptable
    }
    let ingredientedb = new Ingrediente(newIngrediente);
    ingredientedb.save().then((doc) => {
        res.json({ ok: true, ingrediente: doc })
    })
        .catch(err => { res.json({ ok: false, err: err }) })

}