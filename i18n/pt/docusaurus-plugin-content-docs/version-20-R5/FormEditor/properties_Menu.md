---
id: menu
title: Menú
---

## Barra do menu associada

When a menu bar is associated to a form, it is added to the right of the current menu bar when the form is displayed in Application environment.

The selection of a menu command causes an `On Menu Selected` event to be sent to the form method; you can then use the `Menu selected` command to test the selected menu.

> If the menu bar of the form is identical to the current menu bar, it is not added.

A barra de menu do formulário funciona tanto para os formulários de entrada como para os de saída.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis         |
| ------- | ------------- | ------------------------- |
| menuBar | string        | Nome de uma barra de menu |
