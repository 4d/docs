---
id: picturePopupMenuOverview
title: Menú pop-up imagen
---

Un menú emergente de imágenes que muestra un array de imágenes en dos dimensiones. Se puede utilizar un menú emergente de imágenes en lugar de un [botón imagen](pictureButton_overview.md). La creación de la imagen a utilizar con un menú emergente imagen es similar a la creación de una imagen para un botón imagen. El concepto es el mismo que el de la [rejillas de botones](buttonGrid_overview.md), salvo que la imagen se utiliza como un menú emergente en lugar de un objeto del formulario.

## Utilizar los menús emergentes de imágenes

Para crear un menú emergente de imágenes, debe [referirse a una imagen](properties_Picture.md#pathname). El siguiente ejemplo permite seleccionar el idioma de la interfaz seleccionandolo en un menú emergente de imágenes. Cada idioma está representado por la bandera correspondiente:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programación

Puede gestionar los menús emergentes de imágenes utilizando métodos. Al igual que con las [rejillas de botones](buttonGrid_overview.md), las variables asociadas a los menús emergentes de imágenes se definen con el valor del elemento seleccionado en el menú emergente de imágenes. Si no se selecciona ningún elemento, el valor es 0. Los elementos están numerados, línea por línea, de izquierda a derecha, empezando por la línea superior.

### Ir a la página

Puede asociar el `gotoPage` [acción estándar](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) a un objeto de tipo pop-up menu imagen. Cuando se selecciona esa acción, 4D mostrará automáticamente la página del formulario que corresponde a la posición de la imagen seleccionada en el array de imágenes. Los elementos se numeran de izquierda a derecha y de arriba a abajo, empezando por la esquina superior izquierda.

Por ejemplo, si el usuario selecciona el tercer elemento, 4D mostrará la página 3 del formulario actual (si existe). Si desea gestionar usted mismo el efecto de un clic, seleccione `Sin acción`.

## Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) -[Intervalo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Columnas](properties_Crop.md#columns) - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensajes de ayuda](properties_Help.md#help-tip) - [Tamaño Horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Nombre de objeto](properties_Object.md#object-name) - [Ruta](properties_Picture.md#pathname) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Filas](properties_Crop.md#rows)- [Acción Estándar](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Tamaño Vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)  
