const express= require("express")
let categoriasController = require('../controllers/categorias.controller');
const router= express.Router();
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  router.get('/categorias',categoriasController.getCategorias);
  router.post('/categorias', categoriasController.createCategoria)

 module.exports= router;