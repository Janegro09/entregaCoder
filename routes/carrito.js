const { Router } = require('express');
const { carritoGet, carritoPost, carritoPut, carritoDelete } = require('../controllers/carrito');

const router = Router();

router.get('/', carritoGet);

router.post('/', carritoPost);

router.put('/', carritoPut);

router.delete('/', carritoDelete);

module.exports = router;