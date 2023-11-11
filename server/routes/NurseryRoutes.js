const router = require("express").Router();
const { registerUser, nlogin, nsignup } = require("../controllers/nurseryController");

router.post("/nsignup", nsignup);
router.post("/nlogin", nlogin);

module.exports = router;