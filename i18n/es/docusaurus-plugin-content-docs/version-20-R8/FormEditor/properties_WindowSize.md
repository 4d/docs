---
id: windowSize
title: Tamaño de la ventana
---

## Alto fijo

Si selecciona esta opción, la altura de la ventana quedará bloqueada y el usuario no podrá cambiar su tamaño.

Si no se selecciona esta opción, se puede modificar el ancho de la ventana del formulario. En este caso, las propiedades [Altura mínima y Altura máxima](#maximum-height-minimum-height) pueden utilizarse para determinar los límites de redimensionamiento.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles    |
| ------------- | -------------- | ------------------- |
| windowSizingY | string         | "fixed", "variable" |

---&#x20;

## Ancho fijo

Si selecciona esta opción, el ancho de la ventana quedará bloqueada y el usuario no podrá cambiar su tamaño.

Si no se selecciona esta opción, se puede modificar el ancho de la ventana del formulario. En este caso, las propiedades [Ancho mínimo y Alto máximo](#maximum-width-minimum-width) pueden utilizarse para determinar los límites de redimensionamiento.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles    |
| ------------- | -------------- | ------------------- |
| windowSizingX | string         | "fixed", "variable" |

---&#x20;

## Altura máxima, Altura mínima

Altura máxima y mínima (en píxeles) de una ventana de formulario redimensionable si la opción [Alto fijo](#fixed-height) no está definida.

##### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles   |
| --------------- | -------------- | ------------------ |
| windowMinHeight | number         | valor entero largo |
| windowMaxHeight | number         | valor entero largo |

## Ancho máximo, Ancho mínimo

Ancho máximo y mínimo (en píxeles) de una ventana de formulario redimensionable si la opción [Ancho fijo](#fixed-width) no está definida.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles   |
| -------------- | -------------- | ------------------ |
| windowMinWidth | number         | valor entero largo |
| windowMaxWidth | number         | valor entero largo |
