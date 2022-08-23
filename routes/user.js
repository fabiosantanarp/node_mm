const express = require("express");

const userController = require("../controllers/userController");

router = express();

const auth = (req, res, next) => {
    let token = req.headers['authorization'];

    if (token != "Bearer lFT5zRs3hsdWvzR1kte3UkzjCAnfFXhADpWuv3LviEjqrGNnS9J9cKgUasM") {
        res.json("Token invalido", 401);
    }

    next();
}

const auth2 = (req, res, next) => {
    let token = req.headers['authorization'];

    if (token != "Bearer lFT5zRs3hsdWvzR1kte3UkzjCAnfFXhADpWuv3LviEjqrGNnS9J9cKgUasK") {
        res.json("Token invalido", 401);
    }

    next();
}

const controller = new userController();
router.get("/", auth, auth2, (req, res) => {
    res.json(controller.all());
});

router.put("/update/:userid", (req, res) => {
    res.json(controller.update(req));
});

router.put("/create", (req, res) => {
    res.json(controller.create(req));
});

router.delete("/delete/:userid", (req, res) => {
    res.json(controller.delete(req));
});

module.exports = router;