---
id: buttonGridOverview
title: Grade de botões
---

Uma grelha de botões é um objecto transparente colocado em cima de um gráfico. O gráfico deve representar um array linha por coluna. Quando um dos gráficos é clicado, terá uma aparência afundada ou prensada:

![](../assets/en/FormObjects/buttonGrid_smileys.png)

É possível utilizar um objeto de grelha de botões para determinar onde o usuário clica no gráfico. The object method would use the `On Clicked` event and take appropriate action depending on the location of the click.

## Criando grades de botões

Para criar a grelha de botões, adicione um gráfico de fundo ao formulário e coloque uma grelha de botões por cima. Specify the number of [rows](properties_Crop.md#rows) and [columns](properties_Crop.md#columns).

Em 4D, uma grelha de botões é utilizada como uma paleta de cores:

![](../assets/en/FormObjects/button_buttonGrid.png)

## Usar grades de botões

Os botões da grelha estão numerados do canto superior esquerdo para o canto inferior direito. No exemplo acima, a grelha tem 16 colunas de largura por 16 linhas para baixo. O botão na posição superior-esquerda retorna 1 quando clicado. Se o botão vermelho na extremidade direita da segunda linha for selecionado, a grelha de botões apresenta 32.
Se nenhum elemento for seleccionado, o valor é 0

### Ir para página

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) to a button grid. Quando esta ação é selecionada, 4D mostrará automaticamente a página do formulário que corresponde ao número do botão selecionado na grelha de botões. Por exemplo, se o usuário seleciona o décimo botão da grade, 4D mostrará a décima página do formulário atual (se existir).

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Width](properties_CoordinatesAndSizing.md#width) - [Visibility](properties_Display.md#visibility)
