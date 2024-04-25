---
id: windowSize
title: Tamanho da janela
---

## Altura fixa

Se seleccionar esta opção, a altura da janela será bloqueada e não será possível para o utilizador redimensioná-la.

Se esta opção não for seleccionada, a largura da janela do formulário pode ser modificada. In this case, the [Minimum Height and Maximum Height](#maximum-height-minimum-height) properties can be used to determine the resizing limits.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingY | string        | "fixed", "variable" |

---&#x20;

## Largura fixa

Se seleccionar esta opção, a largura da janela será bloqueada e não será possível para o utilizador redimensioná-la.

Se esta opção não for seleccionada, a largura da janela do formulário pode ser modificada. In this case, the [Minimum Width and Maximum Width](#maximum-width-minimum-width) properties can be used to determine the resizing limits.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingX | string        | "fixed", "variable" |

---&#x20;

## Altura máxima, Altura mínima

Maximum and minimum height (in pixels) of a resizeable form window if the [Fixed Height](#fixed-height) option is not set.

##### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| windowMinHeight | number        | valor inteiro     |
| windowMaxHeight | number        | valor inteiro     |

## Largura máxima, Largura mínima

Maximum and minimum width (in pixels) of a resizeable form window if the [Fixed Width](#fixed-width) option is not set.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| windowMinWidth | number        | valor inteiro     |
| windowMaxWidth | number        | valor inteiro     |
