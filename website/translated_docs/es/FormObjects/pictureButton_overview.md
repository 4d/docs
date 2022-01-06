---
id: pictureButtonOverview
title: Botón Imagen
---

A picture button is similar to a [standard button](button_overview.md). However unlike a standard button (which accepts three states: enabled, disabled and clicked), a picture button has a different image to represent each state.

Picture buttons can be used in two ways:

* As command buttons in a form. In this case, the picture button generally includes four different states: enabled, disabled, clicked and rolled over.      
  For example, a table of thumbnails that has one row of four columns, each thumbnail corresponds to the Default, Clicked, Roll over, and Disabled states.

  | Propiedad                  | Nombre JSON            | Valor |
  | -------------------------- | ---------------------- | ----- |
  | Rows                       | rowCount               | 1     |
  | Columnas                   | columnCount            | 4     |
  | Switch back when Released  | switchBackWhenReleased | true  |
  | Switch when Roll Over      | switchWhenRollover     | true  |
  | Use Last Frame as Disabled | useLastFrameAsDisabled | true  |

* As a picture button letting the user choose among several choices. In this case, a picture button can be used in place of a pop-up picture menu. With [Picture Pop-up Menus](picturePopupMenu_overview.md), all choices are displayed simultaneously (as the items in the pop-up menu), while the picture button displays the choices consecutively (as the user clicks the button).   
  Here is an example of a picture button. Suppose you want to give the users of a custom application the opportunity to choose the interface language for the application. You implement the option as a picture button in a custom properties dialog box:

![](assets/en/FormObjects/button_pictureButton.png)

Clicking the object changes the picture.


## Utilizar los botones imagen

You can implement a picture button in the following manner:

1. First, prepare a single graphic in which the series of images are arranged in a row, a column, or a row-by-column grid.

   ![](assets/en/FormObjects/pictureButton_grid.png)

You can organize pictures as columns, rows, or a row-by-column grid (as shown above). When organizing pictures as a grid, they  are numbered from left to right, row by row, beginning with 0. For example, the second picture of the second row of a grid that consists of two rows and three columns, is numbered 4 (The UK flag in the example above).

2. Next, make sure the image is in your project's Resources and enter the path in the [Pathname](properties_TextAndPicture.md#picture-pathname) property.

3. Define the graphic's [Rows and Columns](properties_Crop.md) properties.

4. Specify when the images change by selecting appropriate [animation](properties_Animation.md) properties.


## Animación

In addition to the standard positioning and appearance settings, you can set some specific properties for picture buttons, especially concerning how and when the pictures are displayed. Estas opciones de propiedades pueden combinarse para mejorar sus botones de imagen.

- Por defecto ([cuando no se selecciona la opción animación](properties_Animation.md)), un botón de imagen muestra la siguiente imagen de la serie cuando el usuario hace clic; muestra la imagen anterior de la serie cuando el usuario mantiene pulsada la tecla **Mayúsculas** y hace clic en el botón. Cuando el usuario llega a la última imagen de la serie, la imagen no cambia cuando el usuario hace clic de nuevo. En otras palabras, no vuelve a la primera imagen de la serie.

Hay otros modos disponibles:
- [Vuelve a la primera secuencia](properties_Animation.md#loopBackToFirstFrame)
- [Switch back when Released](properties_Animation.md#switch-back-when-released)
- [Switch when Roll Over](properties_Animation.md#switch-when-roll-over)
- [Desplazamiento continuo en clics](properties_Animation.md#switch-continuously-on-clicks)
- [Use Last Frame as Disabled](properties_Animation.md#use-last-frame-as-disabled)
- [Utilizar el último cuadro como desactivado](properties_Animation.md#use-last-frame-as-disabled)
> [Utilizar el último cuadro como desactivado](properties_Animation.md#use-last-frame-as-disabled) > La [variable asociada](properties_Object.md#variable-or-expression) al botón imagen devuelve el número de índice, en la tabla de miniaturas, de la imagen actual mostrada. La numeración de las imágenes en la tabla empieza por 0.

## Propiedades soportadas

[Negrita](properties_Text.md#bold) - [Estilo del borde](properties_BackgroundAndBorder.md#border-line-style) - [Abajo](properties_CoordinatesAndSizing.md#bottom) - [Estilo del botón](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columnas](properties_Crop.md#columns) - [Soltable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de la fuente](properties_Text.md#font-color) - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Dim. Horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Recomenzar la secuencia](properties_Animation.md#loopBackToFirstFrame) - [Nombre](properties_Object.md#object-name) - [Ruta de acceso de la imagen](properties_Picture.md#pathname) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Líneas](properties_Crop.md#rows) - [Atajo](properties_Entry.md#shortcut) - [Acción estándar](properties_Action.md#standard-action) - [Vuelve a cambiar cuando se libera](properties_Animation.md#switchBackWhenReleased) - [Desplazamiento continuo en clic](properties_Animation.md#switch-continuously-on-clicks) - [Desplazamiento cada x ticks](properties_Animation.md#switch-every-x-ticks) - [Título](properties_Object.md#title) - [Recomenzar la secuencia](properties_Animation.md#switchWhenRollOver) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width) 
