let Categorias = require("../models/categoria.model");

exports.getCategorias = (req, res) => {
    Categorias.find({}).then((categorias) => {
        res.json({ ok: true, categorias: categorias })
    }).catch((e) => {
        console.log(e);
        res.json({ ok: false, err: e });
    })
}
exports.createCategoria = (req, res) => {
    const { body } = req;
    let newCategoria = {
        nombre: body.nombre,
        descripcion: body.descripcion,
    }
    let categoriadb = new Categorias(newCategoria);
    categoriadb.save().then((doc) => {
        res.json({ ok: true, categoria: doc })
    })
        .catch(err => { res.json({ ok: false, err: err }) })

}