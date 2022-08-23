class userController {

    constructor() {
        this.user = [
            {
                "id": 0,
                "name": "Fabio Santana"
            },
            {
                "id": 1,
                "name": "Fulano de Tal"
            },
            {
                "id": 2,
                "name": "Ciclano de Tal"
            },
        ];
    }

    all() {
        return this.user;
    }

    create(req) {
        this.user.push(req.body);
        return this.all();
    }

    update(req) {
        let id = this.user.findIndex((item) => item.id == req.params.userid);
        this.user[id].name = req.body.name;

        return this.user[id];
    }

    delete(req) {
        this.user = this.user.filter((item) => item.id != req.params.userid);
        return { "msg": "Usuario deletado com sucesso!" };
    }
}

module.exports = userController;