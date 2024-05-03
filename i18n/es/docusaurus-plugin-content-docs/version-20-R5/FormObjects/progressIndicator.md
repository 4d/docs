---
id: progressIndicator
title: Indicador de progreso
---

Un indicador de progreso (también llamado "termómetro") está diseñado para mostrar o definir gráficamente los valores numéricos o fecha/hora.

![](../assets/en/FormObjects/progress1.png)

## Utilizar los indicadores

Los indicadores se pueden utilizar tanto para visualizar como para definir valores. Por ejemplo, si a un indicador de progreso se le da un valor por un método, muestra el valor. Si el usuario arrastra el punto indicador, el valor cambia. El valor puede utilizarse en otro objeto, como un campo o un objeto introducible o no introducible.

La variable asociada al indicador controla la visualización. Puede introducir y utilizar lo valores del indicador utilizando métodos. Por ejemplo, un método para un campo o un objeto introducible podría utilizarse para controlar un indicador de progreso:

```4d
 vTherm:=[Employees]Salary
```

Este método asigna el valor del campo Salary a la variable vTherm. Este método se adjuntará al campo Salario.

Por el contrario, puede utilizar el indicador para controlar el valor de un campo. El usuario arrastra el indicador para definir el valor. En este caso el método se convierte en:

```4d
 [Employees]Salary:=vTherm
```

El método asigna el valor del indicador al campo Salario. A medida que el usuario arrastra el indicador, el valor del campo Salario cambia.

## El termómetro por defecto

![](../assets/en/FormObjects/indicator_progressBar.png)

El termómetro es el indicador básico de progreso.

Puede mostrar barras de termómetros horizontales o verticales. Esto viene determinado por la forma del objeto que se dibuja.

Dispone de múltiples opciones gráficas: valores mínimos/máximos, graduaciones, pasos.

### Propiedades soportadas

[Barber shop](properties_Scale.md#barber-shop) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Display graduation](properties_Scale.md#display-graduation) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Italic](properties_Text.md#italic) - [Graduation step](properties_Scale.md#graduation-step) -[Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Label Location](properties_Scale.md#label-location) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Barber shop

![](../assets/en/FormObjects/indicator.gif)

**Barber shop** is a variant of the default thermometer. To enable this variant, you need to set the [Barber shop](properties_Scale.md#barber-shop) property.

> En JSON, basta con eliminar la propiedad "max" del objeto termómetro por defecto para activar la variante Barber shop.

Barber shop displays a continuous animation, like the [spinner](spinner.md). Estos termómetros se utilizan generalmente para indicar al usuario que el programa está en proceso de realizar una operación larga. When this thermometer variant is selected, [graphical Scale properties](properties_Scale.md) are not available.

Cuando se ejecuta el formulario, el objeto no se anima. You manage the animation by passing a value to its [associated variable or expression](properties_Object.md#variable-or-expression):

- 1 = Iniciar animación,
- 0 = Detener la animación.

### Propiedades soportadas

[Barber shop](properties_Scale.md#barber-shop) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Ver también

- [rulers](ruler.md)
- [steppers](stepper.md)
