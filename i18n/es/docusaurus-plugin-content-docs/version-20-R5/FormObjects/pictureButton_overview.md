---
id: pictureButtonOverview
title: Botón Imagen
---

A picture button is similar to a [standard button](button_overview.md). Sin embargo, a diferencia de un botón estándar (que acepta tres estados: activado, desactivado y pulsado), un botón imagen tiene una imagen diferente para representar cada estado.

Los botones imagen pueden utilizarse de dos maneras:

- Como botones de comando en un formulario. En este caso, el botón de imagen suele incluir cuatro estados diferentes: activado, desactivado, presionado y al pasar por encima.\
  Por ejemplo, una tabla de miniaturas que tiene una línea de cuatro columnas, cada miniatura corresponde a los estados Por defecto, Presionado, Pasar el ratón y Desactivado.

  | Propiedad                  | Nombre JSON            | Valor |
  | -------------------------- | ---------------------- | ----- |
  | Rows                       | rowCount               | 1     |
  | Columnas                   | columnCount            | 4     |
  | Switch back when Released  | switchBackWhenReleased | true  |
  | Switch when Roll Over      | switchWhenRollover     | true  |
  | Use Last Frame as Disabled | useLastFrameAsDisabled | true  |

- Como botón de imagen que permite al usuario elegir entre varias opciones. En este caso, se puede utilizar un botón de imagen en lugar de un menú de imagen emergente. With [Picture Pop-up Menus](picturePopupMenu_overview.md), all choices are displayed simultaneously (as the items in the pop-up menu), while the picture button displays the choices consecutively (as the user clicks the button).\
  Aquí un ejemplo de un botón imagen. Supongamos que quiere dar a los usuarios de una aplicación personalizada la posibilidad de elegir el idioma de la interfaz de la aplicación. La opción se implementa como un botón imagen en una caja de diálogo personalizada de propiedades:

![](../assets/en/FormObjects/button_pictureButton.png)

Al hacer clic en el objeto, la imagen cambia.

## Utilizar los botones imagen

Puede implementar un botón imagen de la siguiente manera:

1. En primer lugar, prepare un único gráfico en el que las series de imágenes estén dispuestas en líneas, en columnas o en las dos.

   ![](../assets/en/FormObjects/pictureButton_grid.png)

Puede organizar las imágenes en columnas, líneas o en una cuadrícula (como se muestra arriba). Cuando se organizan las imágenes en forma de cuadrícula, se numeran de izquierda a derecha, línea por línea, empezando por 0. Por ejemplo, la segunda imagen de la segunda línea de una cuadrícula que consta de dos líneas y tres columnas, tiene el número 4 (la bandera del Reino Unido en el ejemplo anterior).

2. Next, make sure the image is in your project's Resources and enter the path in the [Pathname](properties_TextAndPicture.md#picture-pathname) property.

3. Define the graphic's [Rows and Columns](properties_Crop.md) properties.

4. Specify when the images change by selecting appropriate [animation](properties_Animation.md) properties.

## Animación

Además de los parámetros de posicionamiento y de apariencia estándar, puede definir algunas propiedades específicas para los botones imagen, especialmente en lo que respecta a cómo y cuándo se muestran las imágenes. Estas opciones de propiedades pueden combinarse para mejorar sus botones de imagen.

- By default (when no [animation option](properties_Animation.md) is selected), a picture button displays the next picture in the series when the user clicks; it displays the previous picture in the series when the user holds down the **Shift** key and clicks. Cuando el usuario llega a la última imagen de la serie, la imagen no cambia cuando el usuario hace clic de nuevo. En otras palabras, no vuelve a la primera imagen de la serie.

Hay otros modos disponibles:

- [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame)
- [Switch back when Released](properties_Animation.md#switch-back-when-released)
- [Switch when Roll Over](properties_Animation.md#switch-when-roll-over)
- [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks)
- [Use Last Frame as Disabled](properties_Animation.md#use-last-frame-as-disabled)
- [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled)

> The [associated variable](properties_Object.md#variable-or-expression) of the picture button returns the index number, in the thumbnail table, of the current picture displayed. La numeración de las imágenes en la tabla empieza por 0.

## Propiedades soportadas

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Switch back when released](properties_Animation.md#switchBackWhenReleased) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Switch every x ticks](properties_Animation.md#switch-every-x-ticks) - [Title](properties_Object.md#title) - [Switch when roll over](properties_Animation.md#switchWhenRollOver) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
