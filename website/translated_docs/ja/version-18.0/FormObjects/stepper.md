---
id: version-18.0-stepper
title: Stepper
original_id: stepper
---

## 概要

A stepper lets the user scroll through numeric values, durations (times) or dates by predefined steps by clicking on the arrow buttons.

![](assets/en/FormObjects/indicator_numericStepper.png)

## Using steppers

You can assign the variable associated with the object to an enterable area (field or variable) to store or modify the current value of the object.

A stepper can be associated directly with a number, time or date variable.

* For values of the time type, the Minimum, Maximum and Step properties represent seconds. For example, to set a stepper from 8:00 to 18:00 with 10-minute steps: 
    * [minimum](properties_Scale.md#minium) = 28 800 (8*60*60)
    * [maximum](properties_Scale.md#maximum) = 64 800 (18*60*60)
    * [step](properties_Scale.md#step) = 600 (10*60)
* For values of the date type, the value entered in the [step](properties_Scale.md#step) property represents days. The Minimum and Maximum properties are ignored.

> For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to declare it explicitly via the [C_TIME](https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html) or [C_DATE](https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html) command.

For more information, please refer to [Using indicators](progressIndicator.md#using-indicatire) in the "Progress Indicator" page.

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) (only "integer", "number", "date", or "time") - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Step](properties_Scale.md#step) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## See also

- [progress indicators](progressIndicator.md) 
- [rulers](ruler.md)