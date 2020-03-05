const express = require("express")

let categoriasController = require('../controllers/categorias.controller');
let productoController= require('../controllers/productos.controller')
let ingredienteController= require('../controllers/ingredientes.controller')
let rolesController= require("../controllers/roles.controller");
let usersController= require("../controllers/user.controller");
let mesasController=require("../controllers/mesas.controller")
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

router.get('/ingredientes', ingredienteController.getIngredientes);
router.post('/ingredientes', ingredienteController.createIngrediente);
//put
//delete

router.get('/roles', rolesController.getRoles);
router.post('/roles', rolesController.createRol);
//put
//delete

router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUser);
//put
//delete
router.get('/mesas', mesasController.getMesas);
router.post('/mesas', mesasController.createMesa);

module.exports = router;