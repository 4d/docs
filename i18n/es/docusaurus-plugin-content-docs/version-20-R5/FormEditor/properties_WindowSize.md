---
id: windowSize
title: Tamaño de la ventana
---

## Alto fijo

Si selecciona esta opción, la altura de la ventana quedará bloqueada y el usuario no podrá cambiar su tamaño.

Si no se selecciona esta opción, se puede modificar el ancho de la ventana del formulario. In this case, the [Minimum Height and Maximum Height](#maximum-height-minimum-height) properties can be used to determine the resizing limits.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles    |
| ------------- | -------------- | ------------------- |
| windowSizingY | string         | "fixed", "variable" |

---&#x20;

## Ancho fijo

Si selecciona esta opción, el ancho de la ventana quedará bloqueada y el usuario no podrá cambiar su tamaño.

Si no se selecciona esta opción, se puede modificar el ancho de la ventana del formulario. In this case, the [Minimum Width and Maximum Width](#maximum-width-minimum-width) properties can be used to determine the resizing limits.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles    |
| ------------- | -------------- | ------------------- |
| windowSizingX | string         | "fixed", "variable" |

---&#x20;

## Altura máxima, Altura mínima

Maximum and minimum height (in pixels) of a resizeable form window if the [Fixed Height](#fixed-height) option is not set.

##### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles   |
| --------------- | -------------- | ------------------ |
| windowMinHeight | number         | valor entero largo |
| windowMaxHeight | number         | valor entero largo |

## Ancho máximo, Ancho mínimo

Maximum and minimum width (in pixels) of a resizeable form window if the [Fixed Width](#fixed-width) option is not set.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles   |
| -------------- | -------------- | ------------------ |
| windowMinWidth | number         | valor entero largo |
| windowMaxWidth | number         | valor entero largo |
