---
id: pluginAreaOverview
title: Área de plug-in
---

A plug-in area is an area on the form that is completely controlled by a [plug-in](../Extensions/develop-plug-ins.md). La capacidad de integrar plug-ins en los formularios le ofrece posibilidades ilimitadas a la hora de crear aplicaciones personalizadas.

When opening an application, 4D creates an internal list of the plug-ins [installed in your application](../Concepts/plug-ins.md#installing-plug-ins). Una vez que haya insertado un área de plug-in en un formulario, puede asignar un plug-in al área directamente en la lista **Tipo** en la lista de propiedades:

![](../assets/en/FormObjects/pluginArea.png)

> Ciertos plug-ins, como 4D Internet Commands, no pueden utilizarse en formularios o ventanas externas. Cuando un plug-in no puede ser utilizado en un formulario, no aparece en la lista de plug-ins de la Lista de Propiedades.

Si dibuja un área de plug-in demasiado pequeña, 4D la mostrará como un botón cuyo título es el nombre de la variable asociada al área. Durante la ejecución, el usuario puede hacer clic en este botón para abrir una ventana específica que muestre el plug-in.

## Propiedades avanzadas

Si el autor del plug-in proporciona opciones avanzadas, se puede activar un tema **Plug-in** que contenga un botón [**Propiedades avanzadas**](properties_Plugins.md) en la lista de propiedades. En este caso, puede hacer clic en este botón para definir estas opciones, normalmente a través de una caja de diálogo personalizada.

## Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Propiedades avanzadas](properties_Plugins.md) - [Clase](properties_Object.md#css-class) - [Arrastrable](properties_Action.md#draggable) - [Soltable](properties_Action.md#droppable) - [Tipo de expresión](properties_Object.md#expression-type) - [Con enfoque](properties_Entry.md#focusable) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nombre del objeto](properties_Object.md#object-name) - [Tipo de complemento](properties_Object.md#plug-in-kind) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
