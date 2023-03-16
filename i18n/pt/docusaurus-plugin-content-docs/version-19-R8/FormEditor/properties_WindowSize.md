---
id: windowSize
title: Tamanho da janela
---


## Altura fixa


If you select this option, the window height will be locked and it will not be possible for the user to resize it.

If this option is not selected, the width of the form window can be modified. In this case, the [Minimum Height and Maximum Height](#maximum-height-minimum-height) properties can be used to determine the resizing limits.


#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingY | string        | "fixed", "variable" |


---

## Largura fixa


If you select this option, the window width will be locked and it will not be possible for the user to resize it.

If this option is not selected, the width of the form window can be modified. In this case, the [Minimum Width and Maximum Width](#maximum-width-minimum-width) properties can be used to determine the resizing limits.


#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingX | string        | "fixed", "variable" |

---



## Maximum Height, Minimum Height

Maximum and minimum height (in pixels) of a resizeable form window if the [Fixed Height](#fixed-height) option is not set.

##### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| windowMinHeight | number        | valor inteiro     |
| windowMaxHeight | number        | valor inteiro     |


## Maximum Width, Minimum Width

Maximum and minimum width (in pixels) of a resizeable form window if the [Fixed Width](#fixed-width) option is not set.


#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| windowMinWidth | number        | valor inteiro     |
| windowMaxWidth | number        | valor inteiro     |

