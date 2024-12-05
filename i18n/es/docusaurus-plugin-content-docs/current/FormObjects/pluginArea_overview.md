---
id: pluginAreaOverview
title: Área de plug-in
---

Un área de plug-in es un área en el formulario que está completamente controlada por un plug-in. La capacidad de integrar plug-ins en los formularios le ofrece posibilidades ilimitadas a la hora de crear aplicaciones personalizadas. Un plug-in puede realizar una tarea sencilla, como mostrar un reloj digital en un formulario, o una tarea compleja, como ofrecer funciones completas de procesamiento de textos, hojas de cálculo o gráficos.

Al abrir una aplicación, 4D crea una lista interna de los plug-ins [instalados en la aplicación](#installing-plug-ins). Una vez que haya insertado un área de plug-in en un formulario, puede asignar un plug-in al área directamente en la lista **Tipo** en la lista de propiedades:

![](../assets/en/FormObjects/pluginArea.png)

> Ciertos plug-ins, como 4D Internet Commands, no pueden utilizarse en formularios o ventanas externas. Cuando un plug-in no puede ser utilizado en un formulario, no aparece en la lista de plug-ins de la Lista de Propiedades.

Si dibuja un área de plug-in demasiado pequeña, 4D la mostrará como un botón cuyo título es el nombre de la variable asociada al área. Durante la ejecución, el usuario puede hacer clic en este botón para abrir una ventana específica que muestre el plug-in.

## Propiedades avanzadas

Si el autor del plug-in proporciona opciones avanzadas, se puede activar un tema **Plug-in** que contenga un botón [**Propiedades avanzadas**](properties_Plugins.md) en la lista de propiedades. En este caso, puede hacer clic en este botón para definir estas opciones, normalmente a través de una caja de diálogo personalizada.

## Instalar un plug-in

Para añadir un plug-in en tu entorno 4D, primero tiene que salir de 4D. Los plug-ins se cargan al iniciar 4D. Para más información sobre la instalación de plug-ins, consulte [Instalación de plug-ins o componentes](https://doc.4d.com/4Dv17R6/4D/17-R6/Installing-plugins-or-components.300-4354866.en.html).

## Crear plug-ins

Si está interesado en diseñar sus propios plug-ins, puede recibir amplia información sobre cómo escribir e implementar plug-ins. 4D ofrece un [kit completo (en github)](https://github.com/4d/4D-Plugin-SDK) para ayudarle a escribir plug-ins personalizados.

## Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Propiedades avanzadas](properties_Plugins.md) - [Clase](properties_Object.md#css-class) - [Arrastrable](properties_Action.md#draggable) - [Soltable](properties_Action.md#droppable) - [Tipo de expresión](properties_Object.md#expression-type) - [Con enfoque](properties_Entry.md#focusable) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nombre del objeto](properties_Object.md#object-name) - [Tipo de complemento](properties_Object.md#plug-in-kind) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
