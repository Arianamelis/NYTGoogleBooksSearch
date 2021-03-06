const router = require("./node_modules/express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
