---
id: progressIndicator
title: Progress Indicator
---

## Visão Geral

A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.

![](../assets/en/FormObjects/progress1.png)

### Utilizar os indicadores

You can use indicators either to display or set values. For example, if a progress indicator is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object.

The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a progress indicator:

```4d
 $vTherm:=[Employees]Salary
```

Este método atribui o valor do campo Salary à variável $vTherm. This method would be attached to the Salary field.

Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. In this case the method becomes:

```4d
 [Employees]Salary:=$vTherm
```

The method assigns the value of the indicator to the Salary field. As the user drags the indicator, the value in the Salary field changes.

## Default thermometer

![](../assets/en/FormObjects/indicator_progressBar.png)

The thermometer is the basic progress indicator.

You can display horizontal or vertical thermometers bars. This is determined by the shape of the object that you draw.

Multiple graphical options are available: minimum/maximum values, graduations, steps.

### Propriedades compatíveis

[Barber shop](properties_Scale.md#barber-shop) - [Negrito](properties_Text.md#bold) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) -\[Abaixo\](properties_CoordinatesAndSizing. md#bottom) - [Clase](properties_Object.md#css-class) - [Graduação da tela](properties_Scale.md#display-graduation) - \[Enterable\](properties_Entry. md#enterable) - [Executar método objeto](properties_Action.md#execute-object-method) - [Tipo de expressão](properties_Object.md#expression-type) (só "inteiro", "número", "data" ou "hora") - \[Altura\](properties_CoordinatesAndSizing. md#height) - [Etapa de graduação](properties_Scale.md#graduation-step) -[Conselho de ajuda](properties_Help.md#help-tip) - \[Tamanho horizontal\](properties_ResizingOptions. md#horizontal-sizing) - [Lugar da etiqueta](properties_Scale.md#label-location) - [Esquerda](properties_CoordinatesAndSizing.md#left) - \[Máximo\](properties_Scale. md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Formato numérico](properties_Display.md#number-format) - [Nome de objeto](properties_Object.md#object-name) - \[Direita\](properties_CoordinatesAndSizing. md#right) - [Paso](properties_Scale.md#step) - [Acima](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - \[Variável ou expressão\](properties_Object. md#variable-or-expression) - [Tamanho vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)

## Barber shop

![](../assets/en/FormObjects/indicator.gif)

**Barber shop** is a variant of the default thermometer. To enable this variant, you need to set the [Barber shop](properties_Scale.md#barber-shop) property.
> In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant.

Barber shop displays a continuous animation, like the [spinner](spinner.md). These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, [graphical Scale properties](properties_Scale.md) are not available.

When the form is executed, the object is not animated. You manage the animation by passing a value to its [associated variable or expression](properties_Object.md#variable-or-expression):

* 1 (or any value other than 0) = Start animation,
* 0 = Stop animation.

### Propriedades compatíveis

[Barber shop](properties_Scale.md#barber-shop) - [Negrito](properties_Text.md#bold) - \[Estilo da linha de borda\](properties_BackgroundAndBorder. md#border-line-style) -[Abaixo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - \[Digitável\](properties_Entry. md#enterable) - [Executar método objeto](properties_Action.md#execute-object-method) - \[Tipo de expressão\](properties_Object. md#expression-type) (só "inteiro", "número", "data" ou "hora") - [Altura](properties_CoordinatesAndSizing.md#height) - \[Conselho de ajuda\](properties_Help. md#help-tip) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Izquierda\](properties_CoordinatesAndSizing. md#left) - [Nome de objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - \[Acima\](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - \[Tamanho vertical\](properties_ResizingOptions. md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)

## Veja também

- [regras](ruler.md)
* [steppers](stepper.md)
