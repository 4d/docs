---
id: buttonGridOverview
title: Grade de botões
---

Uma grelha de botões é um objecto transparente colocado em cima de um gráfico. O gráfico deve representar um array linha por coluna. Quando um dos gráficos é clicado, terá uma aparência afundada ou prensada:

![](../assets/en/FormObjects/buttonGrid_smileys.png)

É possível utilizar um objeto de grelha de botões para determinar onde o usuário clica no gráfico. O método objeto utilizaria o evento `On Clicked` e tomaria as medidas adequadas em função da localização do clique.

## Criando grades de botões

Para criar a grelha de botões, adicione um gráfico de fundo ao formulário e coloque uma grelha de botões por cima. Especifique o número de [linhas](properties_Crop.md#rows) e [colunas](properties_Crop.md#columns).

Em 4D, uma grelha de botões é utilizada como uma paleta de cores:

![](../assets/en/FormObjects/button_buttonGrid.png)

## Usar grades de botões

Os botões da grelha estão numerados do canto superior esquerdo para o canto inferior direito. No exemplo acima, a grelha tem 16 colunas de largura por 16 linhas para baixo. O botão na posição superior-esquerda retorna 1 quando clicado. Se o botão vermelho na extremidade direita da segunda linha for selecionado, a grelha de botões apresenta 32.
Se nenhum elemento for seleccionado, o valor é 0

### Ir para página

Você pode atribuir a [ação padrão](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) `gotoPage` a uma grade de botões. Quando esta ação é selecionada, 4D mostrará automaticamente a página do formulário que corresponde ao número do botão selecionado na grelha de botões. Por exemplo, se o usuário seleciona o décimo botão da grade, 4D mostrará a décima página do formulário atual (se existir).

## Propriedades compatíveis

[Estilo de linha de bordo](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Colunas](properties_Crop.md#columns) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Filhas](properties_Crop.md#rows) - [Ação padrão](properties_Action.md#standard-action) - [Topo](properties_Coordinates_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variável ou Expression](properties_Object.md#variable-or-expression) - [Tamanho vertical](properties_ResizingOptions.md#vertical-sizing) - [Largura](properties_CoordinatesAndSizing.md#width) - [Visibilidade](properties_Display.md#visibility)
