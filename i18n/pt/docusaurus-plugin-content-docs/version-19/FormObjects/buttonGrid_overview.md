---
id: buttonGridOverview
title: Grade de botões
---

Uma grelha de botões é um objecto transparente colocado em cima de um gráfico. O gráfico deve representar um array linha por coluna. Quando um dos gráficos é clicado, terá uma aparência afundada ou prensada:

![](../assets/en/FormObjects/buttonGrid_smileys.png)

É possível utilizar um objeto de grelha de botões para determinar onde o usuário clica no gráfico. O método objeto utilizaria o evento `On Clicked` e tomaria as medidas adequadas em função da localização do clique.

## Criando grades de botões

To create the button grid, add a background graphic to the form and place a button grid on top of it. Specify the number of [rows](properties_Crop.md#rows) and [columns](properties_Crop.md#columns).

Em 4D, uma grelha de botões é utilizada como uma paleta de cores:

![](../assets/en/FormObjects/button_buttonGrid.png)

## Usar grades de botões

The buttons on the grid are numbered from top left to bottom right. In the above example, the grid is 16 columns across by 16 rows down. O botão na posição superior-esquerda retorna 1 quando clicado. If the red button at the far right of the second row is selected, the button grid returns 32. Se nenhum elemento for seleccionado, o valor é 0

### Ir para página

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) to a button grid. When this action is selected, 4D will automatically display the page of the form that corresponds to the number of the button that is selected in the button grid. For example, if the user selects the tenth button of the grid, 4D will display the tenth page of the current form (if it exists).

## Propriedades compatíveis

[Estilo da borde](properties_BackgroundAndBorder.md#border-line-style) - \[Inferior\](properties_CoordinatesAndSizing. md#bottom) - [Classe](properties_Object.md#css-class) - [Colunas](properties_Crop.md#columns) - \[Droppable\](properties_Action. md#droppable) - [Altura](properties_CoordinatesAndSizing.md#height) - [Conselho de ajuda](properties_Help.md#help-tip) - \[Tamanho horizontal\](properties_ResizingOptions. md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - \[Nome do objeto\](properties_Object. md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Filas](properties_Crop.md#rows) - \[Ação padrão\](properties_Action. md#standard-action) - [Superior](properties_CoordinatesAndSizing.md#top) - \[Tipo\](properties_Object. md#type) - [Variável ou expressão](properties_Object.md#variable-or-expression) - \[Tamanho vertical\](properties_ResizingOptions. md#vertical-sizing) - [Ancho](properties_CoordinatesAndSizing.md#width) - [Visibilidade](properties_Display.md#visibility)
