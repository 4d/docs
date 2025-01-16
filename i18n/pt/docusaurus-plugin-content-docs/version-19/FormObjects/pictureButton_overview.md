---
id: pictureButtonOverview
title: Botão imagem
---

A picture button is similar to a [standard button](button_overview.md). However unlike a standard button (which accepts three states: enabled, disabled and clicked), a picture button has a different image to represent each state.

Os botões imagem podem ser utilizados de duas formas:

* Como botões de comando num formulário. In this case, the picture button generally includes four different states: enabled, disabled, clicked and rolled over. For example, a table of thumbnails that has one row of four columns, each thumbnail corresponds to the Default, Clicked, Roll over, and Disabled states.

  | Propriedade                | Nome JSON              | Valor |
  | -------------------------- | ---------------------- | ----- |
  | Linhas                     | rowCount               | 1     |
  | Colunas                    | columnCount            | 4     |
  | Switch back when Released  | switchBackWhenReleased | true  |
  | Switch when Roll Over      | switchWhenRollover     | true  |
  | Use Last Frame as Disabled | useLastFrameAsDisabled | true  |

* Como botão de imagem que permite ao usuário escolher entre várias opções. Neste caso, pode ser utilizado um botão de imagem em vez de um menu pop-up de imagem. As a picture button letting the user choose among several choices. In this case, a picture button can be used in place of a pop-up picture menu. As a picture button letting the user choose among several choices. In this case, a picture button can be used in place of a pop-up picture menu. Suppose you want to give the users of a custom application the opportunity to choose the interface language for the application. You implement the option as a picture button in a custom properties dialog box:

![](../assets/en/FormObjects/button_pictureButton.png)

Clicar no objeto altera a imagem.


## Usar os botões imagem

É possível implementar um botão imagem da seguinte forma:

1. First, prepare a single graphic in which the series of images are arranged in a row, a column, or a row-by-column grid.

   ![](../assets/en/FormObjects/pictureButton_grid.png)

You can organize pictures as columns, rows, or a row-by-column grid (as shown above). When organizing pictures as a grid, they  are numbered from left to right, row by row, beginning with 0. For example, the second picture of the second row of a grid that consists of two rows and three columns, is numbered 4 (The UK flag in the example above).

2. Em seguida, certifique-se de que a imagem esteja nos recursos do seu projeto e insira o caminho na propriedade [Nome do caminho](properties_TextAndPicture.md#picture-pathname).

3. Definir as propriedades de [linhas e colunas](properties_Crop.md) do gráfico.

4. Especifique quando as imagens mudam selecionando as propriedades [animation](properties_Animation.md) adequadas.


## Animação

In addition to the standard positioning and appearance settings, you can set some specific properties for picture buttons, especially concerning how and when the pictures are displayed. Estas opções de propriedade podem ser combinadas para melhorar seus botões de imagem.

- By default (when no [animation option](properties_Animation.md) is selected), a picture button displays the next picture in the series when the user clicks; it displays the previous picture in the series when the user holds down the **Shift** key and clicks. When the user reaches the last picture in the series, the picture does not change when the user clicks again. Por outras palavras, não regressa à primeira imagem da série.

Estão disponíveis os seguintes outros modos:
- [Repetir a sequência](properties_Animation.md#loop-back-to-first-frame)
- [Switch back when Released](properties_Animation.md#switch-back-when-released)
- [Switch when Roll Over](properties_Animation.md#switch-when-roll-over)
- [Alternar continuamente em cliques](properties_Animation.md#switch-continuously-on-clicks)
- [Utilizar o último marco como desativado](properties_Animation.md#use-last-frame-as-disabled)
- [Mudar a cada x ticks](./properties_Animation.md#switch-every-x-ticks)
> [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) > [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) > The [associated variable](properties_Object.md#variable-or-expression) of the picture button returns the index number, in the thumbnail table, of the current picture displayed. A numeração das imagens no quadro começa com 0.

## Propriedades compatíveis

[Negrito](properties_Text.md#bold) - [Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo do botão](properties_TextAndPicture.md#button-style) - [Classe](properties_Object.md#css-class) - [Colunas](properties_Crop.md#columns) - [Foco](properties_Entry.md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Retornar ao primeiro quadro](properties_Animation.md#loop-back-to-first-frame) - [Nome do objeto](properties_Object.md#object-name) - [Nome do caminho](properties_Picture.md#pathname) - [Direita](properties_CoordinatesAndSizing.md#right) - [Linhas](properties_Crop.md#rows) - [Atalho](properties_Entry.md#shortcut) - [Ação padrão](properties_Action.md#standard-action) - [Retornar quando liberado](properties_Animation.md#switch-back-when-released) - [Alternar continuamente em cliques](properties_Animation.md#switch-continuously-on-clicks) - [Alternar a cada x ticks](properties_Animation.md#switch-every-x-ticks) - [Título](properties_Object.md#title) - [Alternar ao rolar](properties_Animation.md#switch-when-roll-over) - [Parte superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Usar o último quadro como desativado](properties_Animation.md#use-last-frame-as-disabled) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width) 
