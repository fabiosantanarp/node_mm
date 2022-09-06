const express = require("express");
require("./config/global");
const db = require("./database");
const PORT = 3000;

const app = express();

app.use(express.json());

app.use(require("./routes/routes"));

db.sync(() => console.log("Conectado ao banco de dados"));

app.listen(PORT, () => {
  console.log(`Executando na porta ${PORT}`);
});
