const express = require("express");
const app = express();

// /cores/red
// /cores/blue
// /cores/verde
app.get("/cores/:corEscolhida", (req, res) => {
  const corEscolhida = req.params.corEscolhida;

  corEscolhida === "red" &&
    res.send('<h1 style="background-color:red">Vermelho</h1>');

  corEscolhida === "blue" &&
    res.send('<h1 style="background-color:blue">Azul</h1>');

  corEscolhida !== "red" &&
    corEscolhida !== "blue" &&
    res.send("<span>Cor não encontrada</span>");
});

// /dobrar/12
app.get("/dobrar/:numero", (req, res) => {
  const dobro = Number(req.params.numero) * 2;

  res.send(`<p>O dobro do número é: ${dobro}</p>`);
});

// /dobrar-varios/2,5,4,2,10
app.get("/dobrar-varios/:numeros", (req, res) => {
  const numeros = req.params.numeros
    .split(",")
    .map((numero) => Number(numero));

  const dobros = numeros.map((numero) => numero * 2);

  res.send(`<p>Os dobros dos números são: ${dobros.join(", ")}</p>`);
});

// /oi/Duda/Velho
app.get("/oi/:nome/:sobrenome", (req, res) => {
  const nome = req.params.nome;
  const sobrenome = req.params.sobrenome;

  res.send(`Oi, ${nome} ${sobrenome}!`);
});

// 1) /impares/5,4,3,7,8,1,2
app.get("/impares/:numeros", (req, res) => {
  const numeros = req.params.numeros.split(",");

  const impares = numeros.filter(
    (numero) => Number(numero) % 2 !== 0
  );

  res.send(`<p>${impares.join(", ")}</p>`);
});

// 2) /por-extenso/1
app.get("/por-extenso/:numero", (req, res) => {
  const numero = req.params.numero;

  const extenso = [
    "zero",
    "um",
    "dois",
    "tres",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
  ];

  res.send(`<p>${extenso[numero]}</p>`);
});

// 3) /somatorio/2,5,6,7,2,1
app.get("/somatorio/:numeros", (req, res) => {
  const numeros = req.params.numeros
    .split(",")
    .map((numero) => Number(numero));

  const soma = numeros.reduce(
    (total, numero) => total + numero
  );

  res.send(`<p>${soma}</p>`);
});

// 4) /contar-ate/5
app.get("/contar-ate/:numero", (req, res) => {
  const numero = Number(req.params.numero);

  const lista = [];

  for (let i = 1; i <= numero; i++) {
    lista.push(i);
  }

  res.send(`<p>${lista.join(", ")}</p>`);
});

// 5) /caixa/blue/200/100
app.get("/caixa/:cor/:largura/:altura", (req, res) => {
  const cor = req.params.cor;
  const largura = req.params.largura;
  const altura = req.params.altura;

  res.send(`
    <div style="
      background-color:${cor};
      width:${largura}px;
      height:${altura}px;
    "></div>
  `);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});