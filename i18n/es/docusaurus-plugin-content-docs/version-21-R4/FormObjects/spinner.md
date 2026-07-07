---
id: spinner
title: Spinner
---

El spinner es un indicador circular que muestra una animación continua, como la [Barber shop](progressIndicator.md#barber-shop).

![](../assets/en/FormObjects/spinner.gif)

Este tipo de objeto se utiliza para indicar que una operación, como la búsqueda de conexión de red o la realización de un cálculo, está en curso. Cuando se selecciona este indicador, [las propiedades "Graduaciones"](properties_Scale.md) no están disponibles.

Cuando se ejecuta el formulario, el objeto no se anima. La animación se gestiona pasando un valor a su [variable o expresión asociada](properties_Object.md#variable-or-expression):

- 1 (o cualquier valor diferente de 0) = Iniciar la animación,
- 0 = Detener la animación

### Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Tipo de expresión](properties_Object.md#expression-type) - [Altura](properties_CoordinatesAndSizing.md#height) -[Mensaje de ayuda](properties_Help.md#help-tip) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibilidad) - [Ancho](properties_CoordinatesAndSizing.md#width)

### Eventos soportados

[On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Data Change](../Events/onDataChange.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Getting focus](../Events/onGettingFocus.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)