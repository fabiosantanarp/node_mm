const express = require("express");
const routes = require("./routes/user");
const db = require("./db");
const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/user/", routes);

db.sync(() => console.log("Conectado ao banco de dados"));

app.listen(PORT, () => {
  console.log(`Executando na porta ${PORT}`);
});
