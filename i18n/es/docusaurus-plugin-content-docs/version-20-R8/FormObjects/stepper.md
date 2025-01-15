---
id: stepper
title: Stepper
---

Un stepper permite al usuario desplazarse por valores numéricos, duraciones (tiempos) o fechas por pasos predefinidos haciendo clic en los botones de flecha.

![](../assets/en/FormObjects/indicator_numericStepper.png)

## Uso del stepper

Puede asignar la variable asociada al objeto a un área introducible (campo o variable) para almacenar o modificar el valor actual del objeto.

Se puede asociar un stepper directamente a una variable numérica, hora o fecha.

- Para los valores de tipo hora, las propiedades Mínimo, Máximo y Paso representan segundos. Por ejemplo, para programar un paso de 8:00 a 18:00 con pasos de 10 minutos:
  - [mínimo](properties_Scale.md#minimum) = 28 800 (8\*60\*60)
  - [máximo](properties_Scale.md#máximo) = 64 800 (18\*60\*60)
  - [step](properties_Scale.md#step) = 600 (10\*60)
- Para los valores de tipo fecha, el valor introducido en la propiedad [step](properties_Scale.md#step) representa días. Las propiedades Mínimo y Máximo se ignoran.

> Para que el stepper funcione con una variable de hora o fecha, es imprescindible definir su tipo en el formulario Y para [declararla explícitamente] (../Concepts/variables.md#declaring-variables) como `Time` o `Date`.

Para más información, consulte [Uso de indicadores](progressIndicator.md#using-indicators) en la página "Indicador de progreso".

## Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Entrada](properties_Entry.md#enterable) - [Ejecutar método de objeto](properties_Action.md#execute-object-method) - [Tipo de expresión](properties_Object.md#expression-type) (sólo "entero", "número", "fecha" u "hora") - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Máximo](properties_Scale.md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Paso](properties_Scale.md#step) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o expresión](properties_Object.md#variable-o-expresión) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibilidad) - [Ancho](properties_CoordinatesAndSizing.md#ancho)

## Ver también

- [indicadores de progreso](progressIndicator.md)
- [reglas](ruler.md)
