var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();

const categoriesController = require('../components/category/controller')

/** GET all cateogries.
 * http:localhost:3000/categories/
 * method: get*/ 
router.get('/', async function(req, res, next) {
    //Lay danh sach Categories tu database
    const data = await categoriesController.getCategories();
    res.json(data);
  });

module.exports = router;