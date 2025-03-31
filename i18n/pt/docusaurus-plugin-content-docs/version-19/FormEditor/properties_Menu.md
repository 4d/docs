---
id: menu
title: Menú
---


## Barra do menu associada

Quando uma barra de menu estiver associada a um formulário, é adicionado à direita da barra de menu atual quando o formulário é exibido no ambiente Aplicação.

A seleção de um comando de menu faz com que um evento `On Menu Selected` seja enviado para o método do formulário; então você pode usar o comando `Menu selected` para testar o menu selecionado.

> Se a barra de menu do formulário é idêntica à barra de menu atual, ele não será adicionado.

A barra de menu do formulário funciona tanto para os formulários de entrada como para os de saída.


#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis         |
| ------- | ------------- | ------------------------- |
| menuBar | string        | Nome de uma barra de menu |

