const express = require("express");

const userController = require("../controllers/userController");

const USER = [
    {
        "id": 1,
        "name": "Fabio Santana"
    },
    {
        "id": 2,
        "name": "Fulano de Tal"
    }, 
    {
        "id": 3,
        "name": "Ciclano de Tal"
    },  
];

router = express();

router.get("/", (req, res) => {
    res.send("<h1>Listagem de usuários!</h1>");
});

router.get("/:userid", (req, res) => {
    let bearerToken = req.headers["authorization"];
    if (bearerToken != 'Bearer lFT5zRs3hsdWvzR1kte3UkzjCAnfFXhADpWuv3LviEjqrGNnS9J9cKgUasM')
        throw new Error("invalid token");
    const result = USER.find(user => user.id == req.params.userid);
    res.json(result);
});

router.patch("/update/:userid", (req, res) => {
    res.json(new userController().update(req));
});

module.exports = router;