---
id: stepper
title: Stepper
---

Un stepper permet à l'utilisateur de faire défiler des valeurs numériques, des durées (heures) ou des dates par des étapes pré-définies en cliquant sur les boutons de direction.

![](../assets/en/FormObjects/indicator_numericStepper.png)

## Utilisation du stepper

La variable associée à l’objet peut être affectée à une zone saisissable (champ ou variable) afin de stocker ou modifier la valeur courante de l’objet.

Un stepper peut être directement associé à une variable numérique, heure ou date.

- Pour les valeurs de type heure, les propriétés Minimum, Maximum et Pas représentent des secondes. Par exemple, pour définir un stepper de 8h00 à 18h00 avec des pas de 10 minutes :
  - [minimum](properties_Scale.md#minimum) = 28 800 (8\*60\*60)
  - [maximum](properties_Scale.md#maximum) = 64 800 (18\*60\*60)
  - [step](properties_Scale.md#step) = 600 (10\*60)
- For values of the date type, the value entered in the [step](properties_Scale.md#step) property represents days. Les propriétés Minimum et Maximum sont ignorées.

> For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to [declare it explicitly](../Concepts/variables.md#declaring-variables) as `Time` or `Date`.

For more information, please refer to [Using indicators](progressIndicator.md#using-indicators) in the "Progress Indicator" page.

## Propriétés prises en charge

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Voir également

- [progress indicators](progressIndicator.md)
- [rulers](ruler.md)
