// consumindo o express
const express = require("express");

// importando o router & utilizando como um middlewares
const checklistRouter = require("./src/routes/checklist");
// instanciando o express
const app = express();

// inicializando a rota && e todas rotas serao derivada do checklist
app.use("/checklist", checklistRouter);

// chamando o middlewares
app.use(express.json()); // para verificar se quando fazer uma chamda web se tem algum json dentro

// start no servidor
app.listen(3000, () => {
  console.log("Servidor foi iniciado");
});
