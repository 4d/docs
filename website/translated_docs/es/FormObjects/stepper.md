---
id: stepper
title: Stepper
---

## Generalidades

A stepper lets the user scroll through numeric values, durations (times) or dates by predefined steps by clicking on the arrow buttons.

![](assets/en/FormObjects/indicator_numericStepper.png)

## Utilización del stepper

You can assign the variable associated with the object to an enterable area (field or variable) to store or modify the current value of the object.

A stepper can be associated directly with a number, time or date variable.

* For values of the time type, the Minimum, Maximum and Step properties represent seconds. For example, to set a stepper from 8:00 to 18:00 with 10-minute steps:
    * [mínimo](properties_Scale.md#minium) = 28 800 (8*60*60)
    * [máximo](properties_Scale.md#maximum) = 64 800 (18*60*60)
    * [paso](properties_Scale.md#step) = 600 (10*60)
* For values of the date type, the value entered in the [step](properties_Scale.md#step) property represents days. The Minimum and Maximum properties are ignored.
> For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to declare it explicitly via the [C_TIME](https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html) or [C_DATE](https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html) command.

For more information, please refer to [Using indicators](progressIndicator.md#using-indicatire) in the "Progress Indicator" page.

## Propiedades soportadas
[Negrita](properties_Text.md#bold) - [Estilo del borde](properties_BackgroundAndBorder.md#Border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object. md#css-class) - [Columnas](properties_Crop.md#columns) - [Ejecutar método objeto](properties_Action.md#execute-object-method) - [Tipo de expresión](properties_Object. md#expression-type) (sólo "entero", "número", "fecha" o "hora") - [Altura](properties_CoordinatesAndSizing.md#height) - [Consejo de ayuda](properties_Help. md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Máximo](properties_Scale. md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Nombre del objeto](properties_Object.md#object-name) - [Nombre del objeto](properties_Picture. md#pathname) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Líneas](properties_Crop.md#rows) - [Paso](properties_Scale.md#step) - [Acción estándar](properties_Action. md#standard-action) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o expresión](properties_Object. md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)


## Ver también
- [progress indicators](progressIndicator.md)
- [rulers](ruler.md)






