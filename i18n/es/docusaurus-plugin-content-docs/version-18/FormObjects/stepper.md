---
id: stepper
title: Stepper
---

## Generalidades

Un stepper permite al usuario desplazarse por valores numéricos, duraciones (tiempos) o fechas por pasos predefinidos haciendo clic en los botones de flecha.

![](../assets/en/FormObjects/indicator_numericStepper.png)

## Uso del stepper

Puede asignar la variable asociada al objeto a un área introducible (campo o variable) para almacenar o modificar el valor actual del objeto.

Se puede asociar un stepper directamente a una variable numérica, hora o fecha.

* Para los valores de tipo hora, las propiedades Mínimo, Máximo y Paso representan segundos. Por ejemplo, para programar un paso de 8:00 a 18:00 con pasos de 10 minutos:
  * [mínimo](properties_Scale.md#minimum) = 28 800 (8*60*60)
  * [máximo](properties_Scale.md#maximum) = 64 800 (18*60*60)
  * [paso](properties_Scale.md#step) = 600 (10*60)
* Para los valores de tipo fecha, el valor introducido en la propiedad [paso](properties_Scale.md#step) representa días. Las propiedades Mínimo y Máximo se ignoran.
> > For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to declare it explicitly via the [C_TIME](https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html) or [C_DATE](https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html) command.

Para más información, consulte [Uso de indicadores](progressIndicator.md#using-indicators) en la página "Indicadores de progreso".

## Propiedades soportadas

[Negrita](properties_Text.md#bold) - [Estilo del borde](properties_BackgroundAndBorder.md#Border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Columnas](properties_Crop.md#columns) - [Ejecutar método objeto](properties_Action.md#execute-object-method) - [Tipo de expresión](properties_Object.md#expression-type) (sólo "entero", "número", "fecha" o "hora") - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Máximo](properties_Scale.md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Nombre del objeto](properties_Object.md#object-name) - [Ruta](properties_Picture.md#pathname) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Líneas](properties_Crop.md#rows) - [Paso](properties_Scale.md#step) - [Acción estándar](properties_Action.md#standard-action) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)

## Ver también

- [indicadores de progreso](progressIndicator.md)
* [reglas](ruler.md)
