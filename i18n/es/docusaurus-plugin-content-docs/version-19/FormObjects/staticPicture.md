---
id: staticPicture
title: Imagen estática
---


Las imágenes estáticas son [objetos estáticos](formObjects_overview.md#active-and-static-objects) que pueden ser utilizados para varios propósitos en los formularios 4D, incluyendo la decoración, el fondo o la interfaz de usuario:

![](../assets/en/FormObjects/StaticPict.png)

Las imágenes estáticas se almacenan fuera de los formularios y se insertan por referencia. En el editor de formularios, los objetos imagen estáticos se crean mediante operaciones de copiar/pegar o arrastrar y soltar.

> Si coloca una imagen estática en la página 0 de un formulario de varias páginas, aparecerá automáticamente como elemento de fondo en todas las páginas. También puede incluirlo en un formulario heredado, aplicado en el fondo de otros formularios diferentes. Either way, your application will run faster than if the picture was pasted into each page.

## Formato y ubicación

La imagen original debe estar almacenada en un formato gestionado de forma nativa por 4D (4D reconoce los principales formatos de imagen: JPEG, PNG, BMP, SVG, GIF, etc.).

Se pueden utilizar dos ubicaciones principales para la trayectoria de la imagen estática:

- en la carpeta **Resources** del proyecto. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is in the "/RESOURCES/\<picture path\>".
- en una carpeta de imágenes (por ejemplo, llamada **Images**) dentro de la carpeta del formulario. Conveniente cuando las imágenes estáticas se utilizan sólo en el formulario y/o se quiere poder mover o duplicar todo el formulario dentro del proyecto o de diferentes proyectos. En este caso, el nombre de la ruta es "<\picture path\>" y se resuelve desde la raíz de la carpeta del formulario.

## Propiedades soportadas

[Abajo](properties_CoordinatesAndSizing.md#bottom) - [Clase CSS Class](properties_Object.md#css-class) - [Mostrar](properties_Picture.md#display) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Nombre del objeto](properties_Object.md#object-name) - [Nombre de ruta](properties_Picture.md#pathname) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility)  - [Ancho](properties_CoordinatesAndSizing.md#width)
