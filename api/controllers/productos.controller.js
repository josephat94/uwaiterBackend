let Productos = require("../models/producto.model");
let Ingredientes = require("../models/ingrediente.model")
let async = require("async")

exports.getProductos = (req, res) => {
    Productos.find({}).populate("categoria", "nombre").lean().then((Productos) => {
        res.json({ ok: true, Productos: Productos })
    }).catch(e => {
        res.json({ ok: false, e: e })
    })
}

exports.getProductosConIngredientes = (req, res) => {
    Productos.find({}).populate("categoria", "nombre").lean().then((Productos) => {
        async.each(Productos, (producto, next) => {
            if (producto.ingredientesProducto && producto.ingredientesProducto.length > 0) {
                async.each(producto.ingredientesProducto, (ingprod, next2) => {
                    Ingredientes.findOne({ _id: ingprod.ingrediente }).then(doc => {
                        ingprod.nombre = doc.nombre;
                        console.log(doc);
                        next2();
                    }).catch(e => next2())
                }, (e) => {
                    if (e) {
                        next();
                    } else {
                        next();
                    }
                })
            } else {
                next();
            }
        }, (e) => {
            if (e) {
                res.json({ ok: false, e: e })
            } else {
                res.json({ ok: true, Productos: Productos })
            }
        });
    }).catch((e) => {
        console.log(e);
        res.json({ ok: false, err: e });
    })
}

exports.createProducto = (req, res) => {
    const { body } = req;
    let newProducto = {
        ingredientesProducto: body.ingredientesProducto,
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
        categoria: body.categoria
    }
    let productodb = new Productos(newProducto);
    productodb.save().then((doc) => {
        res.json({ ok: true, producto: doc })
    })
        .catch(err => { res.json({ ok: false, err: err }) })
}