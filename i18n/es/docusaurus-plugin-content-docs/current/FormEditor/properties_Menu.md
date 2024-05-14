---
id: menu
title: Menú
---

## Barra de menús asociada

Cuando se asocia una barra de menú a un formulario, ésta se añade a la derecha de la barra de menú actual cuando el formulario se muestra en el entorno Aplicación.

La selección de un comando de menú hace que se envíe un evento `On Menu Selected` al método formulario; entonces puede utilizar el comando `Menu selected` para probar el menú seleccionado.

> Si la barra de menús del formulario es idéntica a la barra de menús actual, no se añade.

La barra de menús del formulario funcionará tanto para los formularios de entrada como para los de salida.

#### Gramática JSON

| Nombre  | Tipos de datos | Valores posibles            |
| ------- | -------------- | --------------------------- |
| menuBar | string         | Nombre de una barra de menú |
