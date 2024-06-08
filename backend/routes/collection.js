const express = require("express");
const router = express.Router();
const {
  getAllCollection,
  filterCollection,
  getOne,
  marksCollection,
  // filterByMarkAndModel,
} = require("../controllers/collection");

router.get("/stocks", getAllCollection);
router.get("/filter-stocks", filterCollection);
router.get("/getOne", getOne);
router.post("/marksCollection", marksCollection);
// router.post("/filterByMarkAndModel", filterByMarkAndModel);

module.exports = router;
