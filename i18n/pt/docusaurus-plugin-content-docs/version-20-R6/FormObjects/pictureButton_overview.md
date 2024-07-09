---
id: pictureButtonOverview
title: Botão imagem
---

Un botón imagen es similar a un [botón estándar](button_overview.md). However unlike a standard button (which accepts three states: enabled, disabled and clicked), a picture button has a different image to represent each state.

Os botões imagem podem ser utilizados de duas formas:

- Como botões de comando num formulário. In this case, the picture button generally includes four different states: enabled, disabled, clicked and rolled over.\
  For example, a table of thumbnails that has one row of four columns, each thumbnail corresponds to the Default, Clicked, Roll over, and Disabled states.

  | Propriedade                | Nome JSON              | Valor |
  | -------------------------- | ---------------------- | ----- |
  | Linhas                     | rowCount               | 1     |
  | Colunas                    | columnCount            | 4     |
  | Switch back when Released  | switchBackWhenReleased | true  |
  | Switch when Roll Over      | switchWhenRollover     | true  |
  | Use Last Frame as Disabled | useLastFrameAsDisabled | true  |

- Como botão de imagem que permite ao usuário escolher entre várias opções. Neste caso, pode ser utilizado um botão de imagem em vez de um menu pop-up de imagem. With [Picture Pop-up Menus](picturePopupMenu_overview.md), all choices are displayed simultaneously (as the items in the pop-up menu), while the picture button displays the choices consecutively (as the user clicks the button).\
  Aqui está um exemplo de um botão imagem. Suppose you want to give the users of a custom application the opportunity to choose the interface language for the application. You implement the option as a picture button in a custom properties dialog box:

![](../assets/en/FormObjects/button_pictureButton.png)

Clicar no objeto altera a imagem.

## Usar os botões imagem

É possível implementar um botão imagem da seguinte forma:

1. First, prepare a single graphic in which the series of images are arranged in a row, a column, or a row-by-column grid.

   ![](../assets/en/FormObjects/pictureButton_grid.png)

You can organize pictures as columns, rows, or a row-by-column grid (as shown above). When organizing pictures as a grid, they  are numbered from left to right, row by row, beginning with 0. For example, the second picture of the second row of a grid that consists of two rows and three columns, is numbered 4 (The UK flag in the example above).

2. A continuación, asegúrese de que la imagen está en los recursos de su proyecto e introduzca la ruta en la propiedad [Ruta de acceso imagen](properties_TextAndPicture.md#picture-pathname).

3. Defina las propiedades de [líneas y columnas](properties_Crop.md) del gráfico.

4. Especifique cuándo cambian las imágenes seleccionando las propiedades de [animación](properties_Animation.md) apropiadas.

## Animação

In addition to the standard positioning and appearance settings, you can set some specific properties for picture buttons, especially concerning how and when the pictures are displayed. Estas opções de propriedade podem ser combinadas para melhorar seus botões de imagem.

- By default (when no [animation option](properties_Animation.md) is selected), a picture button displays the next picture in the series when the user clicks; it displays the previous picture in the series when the user holds down the **Shift** key and clicks. When the user reaches the last picture in the series, the picture does not change when the user clicks again. Por outras palavras, não regressa à primeira imagem da série.

Estão disponíveis os seguintes outros modos:

- [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame)
- [Switch back when Released](properties_Animation.md#switch-back-when-released)
- [Switch when Roll Over](properties_Animation.md#switch-when-roll-over)
- [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks)
- [Use Last Frame as Disabled](properties_Animation.md#use-last-frame-as-disabled)
- [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled)

> [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled)> The [associated variable](properties_Object.md#variable-or-expression) of the picture button returns the index number, in the thumbnail table, of the current picture displa A numeração das imagens no quadro começa com 0.

## Propriedades compatíveis

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Switch back when released](properties_Animation.md#switchBackWhenReleased) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Switch every x ticks](properties_Animation.md#switch-every-x-ticks) - [Title](properties_Object.md#title) - [Switch when roll over](properties_Animation.md#switchWhenRollOver) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
