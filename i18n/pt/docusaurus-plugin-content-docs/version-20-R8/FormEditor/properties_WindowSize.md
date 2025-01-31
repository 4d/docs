---
id: windowSize
title: Tamanho da janela
---

## Altura fixa

Se seleccionar esta opção, a altura da janela será bloqueada e não será possível para o utilizador redimensioná-la.

Se esta opção não for seleccionada, a largura da janela do formulário pode ser modificada. En este caso, las propiedades [Altura mínima y Altura máxima](#maximum-height-minimum-height) pueden utilizarse para determinar los límites de redimensionamiento.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingY | string        | "fixed", "variable" |

---&#x20;

## Largura fixa

Se seleccionar esta opção, a largura da janela será bloqueada e não será possível para o utilizador redimensioná-la.

Se esta opção não for seleccionada, a largura da janela do formulário pode ser modificada. En este caso, las propiedades [Ancho mínimo y Alto máximo](#maximum-width-minimum-width) pueden utilizarse para determinar los límites de redimensionamiento.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingX | string        | "fixed", "variable" |

---&#x20;

## Altura máxima, Altura mínima

Altura máxima y mínima (en píxeles) de una ventana de formulario redimensionable si la opción [Alto fijo](#fixed-height) no está definida.

##### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| windowMinHeight | number        | valor inteiro     |
| windowMaxHeight | number        | valor inteiro     |

## Largura máxima, Largura mínima

Ancho máximo y mínimo (en píxeles) de una ventana de formulario redimensionable si la opción [Ancho fijo](#fixed-width) no está definida.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| windowMinWidth | number        | valor inteiro     |
| windowMaxWidth | number        | valor inteiro     |
