---
id: menu
title: Menú
---

## Barra de menús asociada

Cuando se asocia una barra de menú a un formulario, ésta se añade a la derecha de la barra de menú actual cuando el formulario se muestra en el entorno Aplicación.

The selection of a menu command causes an `On Menu Selected` event to be sent to the form method; you can then use the `Menu selected` command to test the selected menu.

> Si la barra de menús del formulario es idéntica a la barra de menús actual, no se añade.

La barra de menús del formulario funcionará tanto para los formularios de entrada como para los de salida.

#### Gramática JSON

| Nombre  | Tipos de datos | Valores posibles            |
| ------- | -------------- | --------------------------- |
| menuBar | string         | Nombre de una barra de menú |
