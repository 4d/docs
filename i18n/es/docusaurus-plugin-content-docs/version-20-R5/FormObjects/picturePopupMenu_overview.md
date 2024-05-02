---
id: picturePopupMenuOverview
title: Menú pop-up imagen
---

Un menú emergente de imágenes que muestra un array de imágenes en dos dimensiones. A picture pop-up menu can be used instead of a [picture button](pictureButton_overview.md). La creación de la imagen a utilizar con un menú emergente imagen es similar a la creación de una imagen para un botón imagen. The concept is the same as for [button grids](buttonGrid_overview.md), except that the graphic is used as a pop-up menu instead of a form object.

## Utilizar los menús emergentes de imágenes

To create a picture pop-up menu, you need to [refer to a picture](properties_Picture.md#pathname). El siguiente ejemplo permite seleccionar el idioma de la interfaz seleccionandolo en un menú emergente de imágenes. Cada idioma está representado por la bandera correspondiente:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programación

Puede gestionar los menús emergentes de imágenes utilizando métodos. As with [button grids](buttonGrid_overview.md), variables associated with picture pop-up menus are set to the value of the selected element in the picture pop-up menu. Si no se selecciona ningún elemento, el valor es 0. Los elementos están numerados, línea por línea, de izquierda a derecha, empezando por la línea superior.

### Ir a la página

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) to a picture pop-up menu. Cuando se selecciona esa acción, 4D mostrará automáticamente la página del formulario que corresponde a la posición de la imagen seleccionada en el array de imágenes. Los elementos se numeran de izquierda a derecha y de arriba a abajo, empezando por la esquina superior izquierda.

Por ejemplo, si el usuario selecciona el tercer elemento, 4D mostrará la página 3 del formulario actual (si existe).
If you want to manage the effect of a click yourself, select `No action`.

## Propiedades soportadas

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
