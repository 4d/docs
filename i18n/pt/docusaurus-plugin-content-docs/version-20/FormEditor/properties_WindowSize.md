---
id: windowSize
title: Tamanho da janela
---


## Altura fixa


Se seleccionar esta opção, a altura da janela será bloqueada e não será possível para o utilizador redimensioná-la.

Se esta opção não for seleccionada, a largura da janela do formulário pode ser modificada. Neste caso, as propriedades [Altura Mínima e Altura Máxima](#maximum-height-minimum-height) podem ser utilizadas para determinar os limites de redimensionamento.


#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingY | string        | "fixed", "variable" |


---

## Largura fixa


Se seleccionar esta opção, a largura da janela será bloqueada e não será possível para o utilizador redimensioná-la.

Se esta opção não for seleccionada, a largura da janela do formulário pode ser modificada. Neste caso, as propriedades [Largura Mínima e Largura Máxima](#maximum-width-minimum-width) podem ser utilizadas para determinar os limites de redimensionamento.


#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis   |
| ------------- | ------------- | ------------------- |
| windowSizingX | string        | "fixed", "variable" |

---



## Altura máxima, Altura mínima

Altura máxima e mínima (em pixels) de uma janela de forma redimensionável se a opção [Altura fixa](#fixed-height) não estiver definida.

##### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| windowMinHeight | number        | valor inteiro     |
| windowMaxHeight | number        | valor inteiro     |


## Largura máxima, Largura mínima

Largura máxima e mínima (em pixels) de uma janela de forma redimensionável se a opção [Largura fixa](#fixed-width) não estiver definida.


#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| windowMinWidth | number        | valor inteiro     |
| windowMaxWidth | number        | valor inteiro     |

