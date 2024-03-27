const express = require("express")
const router = express.Router();
const ItemController = require("../controllers/ItemController");
router.route("/get").get(ItemController.getProducts);
router.route("/getid/:id").get(ItemController.getProId);
router.route("/getpro/:id").get(ItemController.getList);
router.route("/delete/:id").delete(ItemController.DelProduct);
router.route("/search/:q").get(ItemController.getsearch);
module.exports = router;