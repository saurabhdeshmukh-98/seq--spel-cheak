const router = require("express").Router();
const controller = require("../controller/seplmistak");

router.post("/set", controller.spelCheck);

module.exports = router;