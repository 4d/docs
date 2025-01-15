---
id: stepper
title: Stepper
---

A stepper lets the user scroll through numeric values, durations (times) or dates by predefined steps by clicking on the arrow buttons.

![](../assets/en/FormObjects/indicator_numericStepper.png)

## Usando os steppers

You can assign the variable associated with the object to an enterable area (field or variable) to store or modify the current value of the object.

Um stepper pode ser associado diretamente a uma variável número, hora ou data.

- For values of the time type, the Minimum, Maximum and Step properties represent seconds. Por exemplo, para definir um passo de 8:00 a 18:00 com passos de 10 minutos:
  - [mínimo](properties_Scale.md#minimum) = 28 800 (8\*60\*60)
  - [maximum](properties_Scale.md#maximum) = 64 800 (18\*60\*60)
  - [step](properties_Scale.md#step) = 600 (10\*60)
- Para valores do tipo data, o valor inserido na propriedade [step](properties_Scale.md#step) representa dias. As propriedades Mínimo e Máximo são ignoradas.

> For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to [declare it explicitly](../Concepts/variables.md#declaring-variables) as `Time` or `Date`.

For more information, please refer to [Using indicators](progressIndicator.md#using-indicators) in the "Progress Indicator" page.

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Veja também

- [progress indicators](progressIndicator.md)
- [rulers](ruler.md)
