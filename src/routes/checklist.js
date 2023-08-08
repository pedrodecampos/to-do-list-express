// arquivo para criar rotas
const express = require("express");
const { route } = require("express/lib/application");

//  ferramenta para criar rota nos arquivos
const router = express.Router();

// criando uma nova rota
router.get("/", (req, res) => {
  console.log("Ola");
  res.send;
});

// criando uma rota post
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.title);
});

// criando paramentro para uma rota
router.get("/:id", (req, res) => {
  console.log(req.params.body);
  res.send(`ID: ${req.params.id}`);
});

// rota do tipo put [ATUALIZAR]
router.put("/:id", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.params);
});

// rota do tipo delete [delete]
router.delete("/id:", (req, res) => {
  console.log(req.params.body);
  res.send(`ID: ${req.params.params}`);
});
a;

// exportando a rota
module.exports = router;
