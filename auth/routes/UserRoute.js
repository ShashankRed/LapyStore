const express = require('express')
const user = require('../controllers/UserController')
const prod =require('../controllers/productController')
const router = express.Router()

const { authMiddleware } = require('../controllers/UserController')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

router.get('/findProducts', prod.findProduct)

router.post('/StoreProductInfo', prod.StoreProductInfo)

router.post('/UpdateProductInfo', prod.UpdateProduct)

router.delete('/DeleteProduct/:id', prod.DeleteProduct)

router.get('/findOneProduct/:id', prod.getProductById)





module.exports = router