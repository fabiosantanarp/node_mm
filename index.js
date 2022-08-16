const express = require("express");
const routes = require("./routes/user");

const PORT = 3000;

const app = express();

app.use("/user/",routes);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});
