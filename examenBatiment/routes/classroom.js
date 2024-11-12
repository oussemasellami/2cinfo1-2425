const express = require("express");
const router = express.Router();
const classroomcontroller = require("../controller/classroomcontroller");
const validate = require("../middl/validate");
router.post("/addclassroom", validate, classroomcontroller.add);
router.get("/show", classroomcontroller.show);
router.put("/update/:id", classroomcontroller.update);
router.delete("/delete/:id", classroomcontroller.deleteclass);
router.get("/chat", (req, res, next) => {
  res.render("chat");
});
module.exports = router;
