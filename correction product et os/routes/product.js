var express = require("express");
var router = express.Router();
var product = require("../products.json");
/* GET users listing. */
router.get("/product", function (req, res, next) {
  res.json({
    product,
  });
});

router.get("/product/:id", function (req, res, next) {
  const { id } = req.params;
  console.log(id);
  res.json(product[id]);
});

router.get("/product/:id/:qt", function (req, res, next) {
  
  console.log(id);
  res.json({
    id: req.params.id,
    qt: req.params.qt,
    unitprice: product[req.params.id].price,
    total: product[req.params.id].price * req.params.qt,
  });
});

router.get("/instock/:qt", function (req, res, next) {
var list=[]
for(Element in product){
  if(product[Element].stock > req.params.qt){
    list.push(product[Element])
  }
}
  res.json({
list
  });
});

module.exports = router;
