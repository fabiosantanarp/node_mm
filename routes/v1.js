const express = require("express");

const userController = require("../controllers/userController");

router = express();

const auth = (req, res, next) => {
  let token = req.headers["authorization"];

  if (
    token !=
    "Bearer lFT5zRs3hsdWvzR1kte3UkzjCAnfFXhADpWuv3LviEjqrGNnS9J9cKgUasM"
  ) {
    res.json("Token invalido", 401);
  }

  next();
};

router.get("/list/", auth, userController.index);
router.get("/:userid", auth, userController.get);
router.post("/", auth, userController.create);
router.put("/:userid", auth, userController.update);
router.delete("/:userid", auth, userController.destroy);

module.exports = router;
