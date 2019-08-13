---
id: indicatorsOverview
title: Indicators
---
## Overview

Progress indicators (also called "thermometers"), rulers, and dials are objects that display a value graphically. The three objects work in the same way; they differ only in their appearance. We refer to these three objects as indicators.

You can use indicators either to display or set values. For example, if a thermometer is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object.

## Using indicators  

The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a thermometer:

```code4d
 vTherm:=[Employees]Salary
```
 
This method assigns the value of the Salary field to the vTherm variable. This method would be attached to the Salary field.

Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. In this case the method becomes:

```code4d
 [Employees]Salary:=vTherm
``` 

The method assigns the value of the indicator to the Salary field. As the user drags the indicator, the value in the Salary field changes.

## Indicator types  

Progress indicators and rulers are available from the Form editor object bar. In addition, [Progress indicator](#progress-bar) (Thermometer) and [Ruler](#ruler) object types accept different variants.

>These variants can also be specified using the [OBJECT SET FORMAT](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FORMAT.301-4128245.en.html) command or via JSON.

### Thermometers

#### Progress bar  


![](assets/en/FormObjects/indicator_progressBar.png)

The progress bar is the default progress indicator. You can display horizontal or vertical progress bars. This is determined by the shape of the object that you draw.

#### Supported Properties
[Barber shop](properties_Scale.md#barber-shop) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Display graduation](properties_Scale.md#display-graduation) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Graduation step](properties_Scale.md#graduation-step) -[Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Label Location](properties_Scale.md#label-location) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  

#### Barber shop  


![](assets/en/FormObjects/indicator_barberShop.png)

This type of progress indicator displays a continuous animation. “Barber shop” thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this variant is selected, the options of the [Scale](properties_Scale.md) theme are hidden.

When the form is executed, the object is not animated. You manage the animation by passing a value to its associated variable:

* 1 (or any value other than 0) = Start animation,
* 0 = Stop animation.

>“Barber shop” indicators only work when the appearance is set to System or Printing.

#### Supported Properties
[Barber shop](properties_Scale.md#barber-shop) - [Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  


### Spinner  


![](assets/en/FormObjects/indicator_asychronous.png)

This circular indicator also displays a continuous animation. You use this type of object to indicate that an operation such as establishing a network connection or a performing a calculation is underway. When this variant is selected, the options of the [Scale](properties_Scale.md) theme are hidden.

When the form is executed, the object is not animated. You manage the animation by passing a value to its associated variable:

* 1 (or any value other than 0) = Start animation,
* 0 = Stop animation

#### Supported Properties
[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Expression Type](properties_Object.md#expression-type) - [Height](properties_CoordinatesAndSizing.md#height) -[Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  
 

### Rulers

#### Ruler 

![](assets/en/FormObjects/indicator_ruler.png)

The ruler is a standard interface object used to set or get values using a cursor moved along its graduations. You can assign its associated variable to an enterable area (field or variable) to store or modify the current value of the object.

#### Supported Properties
[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Display graduation](properties_Scale.md#display-graduation) - [Enterable](properties_Entry.md#enterable) - [Execute object method](properties_Action.md#execute-object-method) - [Expression Type](properties_Object.md#expression-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Graduation step](properties_Scale.md#graduation-step) -[Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Label Location](properties_Scale.md#label-location) - [Left](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)   

#### Stepper  

 ![](assets/en/FormObjects/indicator_numericStepper.png)

This standard object lets the user scroll through numeric values, durations (times) or dates by predefined steps by clicking on the arrow buttons.

You can assign the variable associated with the object to an enterable area (field or variable) to store or modify the current value of the object.

A stepper can be associated directly with a number, time or date variable.

* For values of the time type, the Minimum, Maximum and Step properties represent seconds. For example, to set a stepper from 8:00 to 18:00 with 10-minute steps:
    * Minimum = 28 800 (8*60*60)
    * Maximum = 64 800 (18*60*60)
    * Step = 600 (10*60)
* For values of the date type, the value entered in the Step property represents days. The Minimum and Maximum properties are ignored.

>For the stepper to work with a time or date variable, it is imperative to set its type in the Property list AND to declare it explicitly via the [C_TIME](https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html) or [C_DATE](https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html) command.

#### Supported Properties
[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  





