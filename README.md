# Entregavel-4.1

# Atividade: Rotas e Parâmetros com Express.js

Este repositório contém a resolução da atividade prática sobre **Route Params (Parâmetros de Rota)** utilizando o framework **Express.js**. O objetivo principal é receber dados dinâmicos diretamente pela URL da requisição e processá-los para retornar respostas customizadas em HTML ou texto.

---

## Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Express.js** (Framework web para rotas e requisições HTTP)
* **JavaScript (ES6+)**

---

## Endpoints Implementados

Abaixo estão detalhados os 5 endpoints solicitados na atividade, com seus respectivos comportamentos e exemplos de funcionamento.

### 1. Filtrar Números Ímpares
Recebe uma lista de números separados por vírgula e renderiza na tela apenas os valores ímpares.
* **Rota:** `/impares/:numeros`
* **Exemplo de URL:** `/impares/5,4,3,7,8,1,2`
* **Retorno esperado:** `5, 3, 7, 1`

### 2. Número por Extenso
Recebe um número inteiro entre `0` e `10` e retorna o seu nome por extenso.
* **Rota:** `/por-extenso/:numero`
* **Exemplo de URL:** `/por-extenso/1`
* **Retorno esperado:** `um` *(Válido para valores de 0 a 10)*

### 3. Somatório de Valores
Recebe uma lista de números separados por vírgula, realiza a soma de todos eles e exibe o total dentro de uma tag de parágrafo.
* **Rota:** `/somatorio/:numeros`
* **Exemplo de URL:** `/somatorio/2,5,6,7,2,1`
* **Retorno esperado (HTML):** `<p>O somatório dos números é: 23</p>`

### 4. Contagem Progressiva
Gera uma contagem sequencial de 1 até o número inteiro informado pelo usuário na URL.
* **Rota:** `/contar-ate/:numero`
* **Exemplo de URL:** `/contar-ate/5`
* **Retorno esperado:** `1, 2, 3, 4, 5`

### 5. Renderização de Caixa Dinâmica
Gera um bloco visual (`<div>`) estilizado dinamicamente via atributos passados na URL, controlando a cor de fundo, a largura e a altura da caixa.
* **Rota:** `/caixa/:cor/:largura/:altura`
* **Exemplo de URL:** `/caixa/blue/200/100`
* **Retorno esperado:** Uma caixa estilizada na cor azul com dimensões de 200px por 100px renderizada diretamente no navegador.

---
