const express = require("express")
let categoriasController = require('../controllers/categorias.controller');
let productoController= require('../controllers/productos.controller')
const router = express.Router();
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/categorias', categoriasController.getCategorias);
router.post('/categorias', categoriasController.createCategoria)
//put
//delete
router.get('/productos', productoController.getProductos);
router.post('/productos', productoController.createProducto);
//put
//delete
module.exports = router;