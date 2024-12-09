---
id: pictureButtonOverview
title: Botón Imagen
---

Un botón imagen es similar a un [botón estándar](button_overview.md). Sin embargo, a diferencia de un botón estándar (que acepta tres estados: activado, desactivado y pulsado), un botón imagen tiene una imagen diferente para representar cada estado.

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

- Como botón de imagen que permite al usuario elegir entre varias opciones. En este caso, se puede utilizar un botón de imagen en lugar de un menú de imagen emergente. Con los [menús emergentes de imágenes](picturePopupMenu_overview.md), todas las opciones se muestran simultáneamente (como los elementos del menú emergente), mientras que el botón de imagen muestra las opciones consecutivamente (a medida que el usuario hace clic en el botón).\
  Aquí un ejemplo de un botón imagen.\
  Aquí un ejemplo de un botón imagen. Supongamos que quiere dar a los usuarios de una aplicación personalizada la posibilidad de elegir el idioma de la interfaz de la aplicación. La opción se implementa como un botón imagen en una caja de diálogo personalizada de propiedades:

![](../assets/en/FormObjects/button_pictureButton.png)

Al hacer clic en el objeto, la imagen cambia.

## Utilizar los botones imagen

Puede implementar un botón imagen de la siguiente manera:

1. En primer lugar, prepare un único gráfico en el que las series de imágenes estén dispuestas en líneas, en columnas o en las dos.

   ![](../assets/en/FormObjects/pictureButton_grid.png)

Puede organizar las imágenes en columnas, líneas o en una cuadrícula (como se muestra arriba). Cuando se organizan las imágenes en forma de cuadrícula, se numeran de izquierda a derecha, línea por línea, empezando por 0. Por ejemplo, la segunda imagen de la segunda línea de una cuadrícula que consta de dos líneas y tres columnas, tiene el número 4 (la bandera del Reino Unido en el ejemplo anterior).

2. A continuación, asegúrese de que la imagen está en los recursos de su proyecto e introduzca la ruta en la propiedad [Ruta de acceso imagen](properties_TextAndPicture.md#picture-pathname).

3. Defina las propiedades de [líneas y columnas](properties_Crop.md) del gráfico.

4. Especifique cuándo cambian las imágenes seleccionando las propiedades de [animación](properties_Animation.md) apropiadas.

## Animación

Además de los parámetros de posicionamiento y de apariencia estándar, puede definir algunas propiedades específicas para los botones imagen, especialmente en lo que respecta a cómo y cuándo se muestran las imágenes. Estas opciones de propiedades pueden combinarse para mejorar sus botones de imagen.

- Por defecto (cuando no se selecciona la [opción animación](properties_Animation.md)), un botón de imagen muestra la siguiente imagen de la serie cuando el usuario hace clic; muestra la imagen anterior de la serie cuando el usuario mantiene pulsada la tecla **Mayúsculas** y hace clic en el botón. Cuando el usuario llega a la última imagen de la serie, la imagen no cambia cuando el usuario hace clic de nuevo. En otras palabras, no vuelve a la primera imagen de la serie.

Hay otros modos disponibles:

- [Retroceder al primer cuadro](properties_Animation.md#loop-back-to-first-frame)
- [Retroceder al soltar](properties_Animation.md#switch-back-when-released)
- [Alternar al pasar el ratón por encima](properties_Animation.md#switch-when-roll-over)
- [Alternar continuamente al hacer clic](properties_Animation.md#switch-continuously-on-clicks)
- [Usar el último fotograma como desactivado](properties_Animation.md#use-last-frame-as-disabled)
- [Usar último fotograma como desactivado](properties_Animation.md#use-last-frame-as-disabled)

> [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled)> The [associated variable](properties_Object.md#variable-or-expression) of the picture button returns the index number, in the thumbnail table, of the current picture displa La numeración de las imágenes en la tabla empieza por 0. La numeración de las imágenes en la tabla empieza por 0.

## Propiedades soportadas

[Negrita](properties_Text.md#bold) - [Estilo línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botón](properties_TextAndPicture.md#button-style) - [Clase](properties_Object.md#css-class) - [Columnas](properties_Crop.md#columns) - [Enfocable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Alto](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Dimensionamiento Horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Volver al primer fotograma](properties_Animation.md#loop-back-to-first-frame) - [Nombre del objeto](properties_Object.md#object-name) - [Ruta](properties_Picture.md#pathname) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Líneas](properties_Crop.md#rows) - [Atajo](properties_Entry.md#shortcut) - [Acción estándar](properties_Action.md#standard-action) - [Volver a cambiar cuando se suelte](properties_Animation.md#switch-back-when-released) - [Conmutar continuamente con clics](properties_Animation.md#switch-continuously-on-clicks) - [Cambiar cada x ticks](properties_Animation.md#switch-every-x-tics) - [Título](properties_Object.md#title) - [Cambiar al volcar](properties_Animation.md#switch-when-roll-over) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Utilizar el último cuadro como desactivado](properties_Animation.md#use-last-frame-as-disabled) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
