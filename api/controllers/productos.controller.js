let Productos = require("../models/producto.model");

exports.getProductos = (req, res) => {
    Productos.find({}).then((Productos) => {
        res.json({ ok: true, Productos: Productos })
    }).catch((e) => {
        console.log(e);
        res.json({ ok: false, err: e });
    })
}

exports.createProducto = (req, res) => {
    const { body } = req;
    let newProducto = {
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
        categoria:body.categoria
    }
    let productodb = new Productos(newProducto);
    productodb.save().then((doc) => {
        res.json({ ok: true, producto: doc })
    })
        .catch(err => { res.json({ ok: false, err: err }) })

}