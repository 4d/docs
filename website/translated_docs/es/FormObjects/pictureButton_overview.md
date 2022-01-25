---
id: pictureButtonOverview
title: Botón Imagen
---

Un botón imagen es similar a un [botón estándar](button_overview.md). Sin embargo, a diferencia de un botón estándar (que acepta tres estados: activado, desactivado y pulsado), un botón imagen tiene una imagen diferente para representar cada estado.

Los botones imagen pueden utilizarse de dos maneras:

* Como botones de comando en un formulario. En este caso, el botón imagen generalmente incluye cuatro estados diferentes: activado, desactivado, presionado y pasado por encima.      
  Por ejemplo, una tabla de miniaturas que tiene una línea de cuatro columnas, cada una de las miniaturas corresponde a los estados Por defecto, Presionado, Pasado por encima y Desactivado.

  | Propiedad                                  | Nombre JSON            | Valor |
  | ------------------------------------------ | ---------------------- | ----- |
  | Rows                                       | rowCount               | 1     |
  | Columnas                                   | columnCount            | 4     |
  | Switch back when Released                  | switchBackWhenReleased | true  |
  | Switch when Roll Over                      | switchWhenRollover     | true  |
  | Utilizar el Último cuadro como Desactivado | useLastFrameAsDisabled | true  |

* Como botón de imagen que permite al usuario elegir entre varias opciones. En este caso, se puede utilizar un botón de imagen en lugar de un menú de imagen emergente. Con los [Menús emergergentes imagen](picturePopupMenu_overview.md), todas las opciones se muestran simultáneamente (como los elementos del menú emergente), mientras que un botón imagen muestra las opciones consecutivamente (a medida que el usuario hace clic en el botón).   
  Este es un ejemplo de botón imagen. Supongamos que quiere dar a los usuarios de una aplicación personalizada la posibilidad de elegir el idioma de la interfaz de la aplicación. La opción se implementa como un botón imagen en una caja de diálogo personalizada de propiedades:

![](assets/en/FormObjects/button_pictureButton.png)

Al hacer clic en el objeto, la imagen cambia.


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
- [Utilizar el Último cuadro como Desactivado](properties_Animation.md#use-last-frame-as-disabled)
- [Utilizar el último cuadro como desactivado](properties_Animation.md#use-last-frame-as-disabled)
> [Utilizar el último cuadro como desactivado](properties_Animation.md#use-last-frame-as-disabled) > [Utilizar el último cuadro como desactivado](properties_Animation.md#use-last-frame-as-disabled) > La [variable asociada](properties_Object.md#variable-or-expression) al botón imagen devuelve el número de índice, en la tabla de miniaturas, de la imagen actual mostrada. La numeración de las imágenes en la tabla empieza por 0.

## Propiedades soportadas

[Negrita](properties_Text.md#bold) - [Estilo del borde](properties_BackgroundAndBorder.md#border-line-style) - [Abajo](properties_CoordinatesAndSizing.md#bottom) - [Estilo del botón](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columnas](properties_Crop.md#columns) - [Soltable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de la fuente](properties_Text.md#font-color) - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Dim. Horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Recomenzar la secuencia](properties_Animation.md#loopBackToFirstFrame) - [Nombre](properties_Object.md#object-name) - [Ruta de acceso de la imagen](properties_Picture.md#pathname) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Líneas](properties_Crop.md#rows) - [Atajo](properties_Entry.md#shortcut) - [Acción estándar](properties_Action.md#standard-action) - [Vuelve a cambiar cuando se libera](properties_Animation.md#switchBackWhenReleased) - [Desplazamiento continuo en clic](properties_Animation.md#switch-continuously-on-clicks) - [Desplazamiento cada x ticks](properties_Animation.md#switch-every-x-ticks) - [Título](properties_Object.md#title) - [Recomenzar la secuencia](properties_Animation.md#switchWhenRollOver) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width) 
