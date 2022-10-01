var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const userController = require('../components/users/controller');
const productController = require('../components/products/controller');
const authentication = require('../components/middle/authentication');
const favoriteController = require('../components/favorite/favorite')
// http://localhost:3000/api/login

router.post('/login', async function (req, res, next) {
  const { email, password } = req.body;
  const result = await userController.dangNhap(email, password);
  if (result) {
    // token lấy ở đây
    const token = jwt.sign({ id: result.id, username: result.username }, 'iloveyou');
    res.json({ status: true, result, token });
  } else {
    res.json({ status: false });
  }
});


// http://localhost:3000/api/register

router.post('/register', async function (req, res, next) {
  const { name, username, email, phone, password } = req.body;
  const result = await userController.register(name, username, email, phone, password);
  if (result) {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

router.get('/favorite',async function(req,res,next){
  const f = await favoriteController.getAllFavorite()
  res.json(f)
})
router.post('/favorite/create', async (req, res, next) => {
  const { user_id, product_id } = req.body
  const f = await favoriteController.insertFavorite({ user_id, product_id })
  if (f) {
    return res.status(200).json({success:true,msg:'insert success!!'})
  }
  res.status(401).json({success:false,msg:'insert failed!!!'})
})
router.post('/favorite/edit',async function(req,res,next){
  const {id} = req.body
  const f = await favoriteController.updateFavorite(id)
  if (f) {
    return res.status(200).json({success:true,msg:'update success!!'})
  }
  res.status(401).json({success:false,msg:'update failed!!!'})
})


// http://localhost:3000/api/products
// thêm middle kiểm tra login
// khi nào login, có token thì mới lấy được danh sách sản phẩm
router.get('/products', [authentication.checkToken], async function (req, res, next) {
  const products = await productController.getProducts();
  res.json(products);
});

// http://localhost:3000/api/products/:id/detail
// thêm middle kiểm tra login
// khi nào login, có token thì mới lấy được danh sách sản phẩm
router.get('/products/:id/detail', [authentication.checkToken], async function (req, res, next) {
  const { id } = req.params;
  const product = await productController.getProductById(id);
  res.json(product);
});

module.exports = router;
