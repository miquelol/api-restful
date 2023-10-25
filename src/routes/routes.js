const router = require('express').Router()
const ProductController = require('../controllers/products')


// VERBOS HTTP (4 tipos)
//GET - Obter dados
//POST - enviar/receber dados
//PUT - atualizar
//DELETE - deletar


router.get('/products', ProductController.get)
//router.post('/products', ProductController.post)
//router.put('/products', ProductController.put)
//router.delete('/products', ProductController.delete)





module.exports = router