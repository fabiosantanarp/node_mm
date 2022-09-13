const connection = require("../database/index");

class abstractRepository{
    constructor(){
        this.DB=connection;
    }
}

module.exports = {abstractRepository};