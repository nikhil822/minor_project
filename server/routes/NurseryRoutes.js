const router = require("express").Router();
const { nsignup, nlogin } = require("../controllers/nurseryController");

router.post("/nsignup", nsignup);
router.post("/nlogin", nlogin);

module.exports = router;