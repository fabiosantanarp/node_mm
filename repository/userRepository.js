const { abstractRepository } = require("./abstractRepository");

class userRepository extends abstractRepository{
    constructor(){
        super();
    }
    all = async()=>{
        console.log(global);
        return await this.DB.query('select * from users');
    }
}

module.exports = userRepository;