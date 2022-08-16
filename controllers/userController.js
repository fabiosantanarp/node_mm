class userController {

    update(req) {
        return { "msg": `"Usuario Atualizado: ${req.params.userid}` };
    }

}

module.exports = userController;