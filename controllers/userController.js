const User = require("../model/user");
const userRepository = require("../repository/userRepository");

const index = async (req, res) => {
  let repository = new userRepository;
  let users = await repository.all();
  console.log(users);
  res.json(users);
};

const create = async (req, res) => {
  const { name, age } = req.body;

  if (!name) {
    res.json({
      message: "Nome não pode ser vazio",
    });
  }

  if (!age) {
    res.json({
      message: "Idade não pode ser vazio",
    });
  }

  const user = await User.create({
    name,
    age,
  });

  res.json(user);
};

const update = async (req, res) => {
  const { name, age } = req.body;
  const { userid } = req.params;

  if (!name) {
    res.json({
      message: "Nome não pode ser vazio",
    });
  }

  if (!age) {
    res.json({
      message: "Idade não pode ser vazio",
    });
  }

  const userExist = await User.findByPk(userid);

  if (!userExist) {
    res.json(
      {
        message: "Usuário não encontrado",
      },
      400
    );
  }

  await User.update(
    {
      name,
      age,
    },
    {
      where: {
        id: userid,
      },
    }
  );

  res.json({
    message: "Usuário atualizado com sucesso!",
  });
};

const destroy = async (req, res) => {
  const { userid } = req.params;

  await User.destroy({
    where: {
      id: userid,
    },
  });

  res.json({
    message: "Usuário excluído com sucesso!",
  });
};

const get = async (req, res) => {
  const { userid } = req.params;

  const user = await User.findByPk(userid);

  if (!user) {
    res.json(
      {
        message: "Usuário não encontrado",
      },
      400
    );
  }

  res.json(user);
};

module.exports = { index, create, update, destroy, get };
