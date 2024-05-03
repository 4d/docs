---
id: buttonGridOverview
title: Rejilla de botones
---

Una rejilla de botones es un objeto transparente que se coloca sobre una imagen. La imagen debe corresponder a la forma d eun array. Cuando se hace clic en uno de los gráficos, éste tendrá un aspecto presionado:

![](../assets/en/FormObjects/buttonGrid_smileys.png)

Puede utilizar un objeto rejilla de botones para determinar dónde hace clic el usuario en la imagen. The object method would use the `On Clicked` event and take appropriate action depending on the location of the click.

## Crear rejillas de botones

Para crear la rejilla de botones, añada una imagen de fondo al formulario y coloque una rejilla de botones sobre ella. Specify the number of [rows](properties_Crop.md#rows) and [columns](properties_Crop.md#columns).

En 4D, se utiliza una rejilla de botones para las paletas de colores:

![](../assets/en/FormObjects/button_buttonGrid.png)

## Utilizar rejillas de botones

Los botones de la rejilla están numerados de izquierda a derecha y de arriba a abajo. En el ejemplo anterior, la rejilla tiene 16 columnas a lo ancho por 16 líneas a hacia abajo. El botón en la posición superior izquierda devuelve 1 cuando se hace clic. Si se selecciona el botón rojo del extremo derecho de la segunda fila, la rejilla de botones devuelve 32.
Si no se selecciona ningún elemento, el valor es 0

### Ir a la página

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) to a button grid. Cuando se selecciona esta acción, 4D mostrará automáticamente la página del formulario que corresponde al número del botón que está seleccionado en la rejilla de botones. Por ejemplo, si el usuario selecciona el décimo botón de la rejilla, 4D mostrará la décima página del formulario actual (si existe).

## Propiedades soportadas

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Width](properties_CoordinatesAndSizing.md#width) - [Visibility](properties_Display.md#visibility)
