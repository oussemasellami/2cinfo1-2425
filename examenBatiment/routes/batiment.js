const express = require("express");
const router = express.Router();
const BatimentController = require("../controller/batimentcontroller");

router.post("/add", BatimentController.addbatiment);
router.get("/getall", BatimentController.getallbatiemnt);
router.get("/getbyid/:id", BatimentController.getbyidbatiment);
router.delete("/deletebyid/:id", BatimentController.deletebyidBatiment);
router.delete("/deleteniveau/:id", BatimentController.deletebyidniveau);
//router.put("/attaque/:id1/:id2", joueurController.attaque);
//router.post("/addpartie/:id1/:id2", joueurController.addpartie);
router.get("/batiment", (req, res, next) => {
  res.render("batiment");
});
module.exports = router;
