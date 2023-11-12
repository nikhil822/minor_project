const router = require("express").Router();
const { nlogin, nsignup, getAllNursery } = require("../controllers/nurseryController");

router.post("/nsignup", nsignup);
router.post("/nlogin", nlogin);
router.get("/ngetAll", getAllNursery);

module.exports = router;