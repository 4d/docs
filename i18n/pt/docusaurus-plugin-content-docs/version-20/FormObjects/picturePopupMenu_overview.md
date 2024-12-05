---
id: picturePopupMenuOverview
title: Menu pop-up imagem
---

A picture pop-up menu is a pop-up menu that displays a two-dimensional array of pictures. A picture pop-up menu can be used instead of a [picture button](pictureButton_overview.md). The creation of the picture to use with a picture pop-up menu is similar to the creation of a picture for a picture button. The concept is the same as for [button grids](buttonGrid_overview.md), except that the graphic is used as a pop-up menu instead of a form object.


## Utilizar os menus emergentes de imagens

To create a picture pop-up menu, you need to [refer to a picture](properties_Picture.md#pathname). The following example allows you to select the interface language by selecting it from a picture pop-up menu. Cada língua é representada pela bandeira correspondente:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programação

Pode gerir os menus pop-up de imagens utilizando métodos. As with [button grids](buttonGrid_overview.md), variables associated with picture pop-up menus are set to the value of the selected element in the picture pop-up menu. Se nenhum elemento for seleccionado, o valor é 0. Os elementos são numerados, linha a linha, da esquerda para a direita, começando pela linha superior.


### Ir para página

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) to a picture pop-up menu. When that action is selected, 4D will automatically display the page of the form that corresponds to the position of the picture selected in the picture array. Elements are numbered from left to right and top to bottom, beginning with the top left corner.

For example, if the user selects the 3rd element, 4D will display the third page of the current form (if it exists). If you want to manage the effect of a click yourself, select `No action`.




## Propriedades compatíveis
[Negrito](properties_Text.md#bold) - [Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) [-Inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Colunas](properties_Crop.md#columns) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Nome do caminho](properties_Picture.md#pathname) - [Direita](properties_CoordinatesAndSizing.md#right) - [Linhas -](properties_Crop.md#rows) [Ação padrão](properties_Action.md#standard-action) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  