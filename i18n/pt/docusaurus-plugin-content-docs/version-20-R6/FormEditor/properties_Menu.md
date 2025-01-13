---
id: menu
title: Menú
---

## Barra do menu associada

Quando uma barra de menu estiver associada a um formulário, é adicionado à direita da barra de menu atual quando o formulário é exibido no ambiente Aplicação.

La selección de un comando de menú hace que se envíe un evento `On Menu Selected` al método formulario; entonces puede utilizar el comando `Menu selected` para probar el menú seleccionado.

> Se a barra de menu do formulário é idêntica à barra de menu atual, ele não será adicionado.

A barra de menu do formulário funciona tanto para os formulários de entrada como para os de saída.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis         |
| ------- | ------------- | ------------------------- |
| menuBar | string        | Nome de uma barra de menu |
