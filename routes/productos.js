const { Router } = require('express');
const { 
    productosDelete, 
    productosGet, 
    productosPost, 
    productosPut, 
    productosGetOne} = require('../controllers/productos');

const router = Router();

router.get('/', productosGet);

router.get('/:id', productosGetOne);

router.post('/', productosPost);

router.put('/:id', productosPut);

router.delete('/', productosDelete);

module.exports = router;