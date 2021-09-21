---
id: progressIndicator
title: Indicador de progreso
---

## Generalidades

A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.

![](assets/en/FormObjects/progress1.png)

### Utilizar los indicadores

You can use indicators either to display or set values. For example, if a progress indicator is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object.

The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a progress indicator:

```4d
 $vTherm:=[Employees]Salary
```

Este método asigna el valor del campo Salary a la variable $vTherm. This method would be attached to the Salary field.

Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. En este caso el método se convierte en:

```4d
 [Employees]Salary:=$vTherm
```

El método asigna el valor del indicador al campo Salario. A medida que el usuario arrastra el indicador, el valor del campo Salario cambia.


## El termómetro por defecto

![](assets/en/FormObjects/indicator_progressBar.png)

El termómetro es el indicador básico de progreso.

Puede mostrar barras de termómetros horizontales o verticales. Esto viene determinado por la forma del objeto que se dibuja.

Dispone de múltiples opciones gráficas: valores mínimos/máximos, graduaciones, pasos.

### Propiedades soportadas
[Barber shop](properties_Scale.md#barber-shop) - [Negrita](properties_Text.md#bold) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) -[Abajo](properties_CoordinatesAndSizing. md#bottom) - [Clase](properties_Object.md#css-class) - [Graduación de la pantalla](properties_Scale.md#display-graduation) - [Enterable](properties_Entry. md#enterable) - [Ejecutar método objeto](properties_Action.md#execute-object-method) - [Tipo de expresión](properties_Object.md#expression-type) (sólo "entero", "número", "fecha" o "hora") - [Altura](properties_CoordinatesAndSizing. md#height) - [Paso de graduación](properties_Scale.md#graduation-step) -[Consejo de ayuda](properties_Help.md#help-tip) - [Tamaño horizontal](properties_ResizingOptions. md#horizontal-sizing) - [Lugar de la etiqueta](properties_Scale.md#label-location) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Máximo](properties_Scale. md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Formato numérico](properties_Display.md#number-format) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing. md#right) - [Paso](properties_Scale.md#step) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variable o expresión](properties_Object. md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)


## Barber shop

![](assets/en/FormObjects/indicator.gif)

**Barber shop** es una variante del termómetro por defecto. Para activar esta variante, es necesario definir la propiedad [Barber shop](properties_Scale.md#barber-shop).
> En JSON, basta con eliminar la propiedad "max" del objeto termómetro por defecto para activar la variante Barber shop.

La Barber shop muestra una animación continua, como la [spinner](spinner.md). Estos termómetros se utilizan generalmente para indicar al usuario que el programa está en proceso de realizar una operación larga. Cuando se selecciona esta variante termómetro, [las propiedades de la escala gráfica](properties_Scale.md) no están disponibles.

Cuando se ejecuta el formulario, el objeto no se anima. La animación se gestiona pasando un valor a su [variable o expresión asociada](properties_Object.md#variable-or-expression):

* 1 (o cualquier valor diferente de 0) = Iniciar la animación,
* 0 = Detener la animación.

### Propiedades soportadas
[Barber shop](properties_Scale.md#barber-shop) - [Negrita](properties_Text.md#bold) - [Estilo de la línea de borde](properties_BackgroundAndBorder. md#border-line-style) -[Abajo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Enterable](properties_Entry. md#enterable) - [Ejecutar método objeto](properties_Action.md#execute-object-method) - [Tipo de expresión](properties_Object. md#expression-type) (sólo "entero", "número", "fecha" o "hora") - [Altura](properties_CoordinatesAndSizing.md#height) - [Consejo de ayuda](properties_Help. md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing. md#left) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Arriba](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions. md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)


## Ver también
- [reglas](ruler.md)
- [steppers](stepper.md)
