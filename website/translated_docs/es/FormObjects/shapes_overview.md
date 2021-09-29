---
id: shapesOverview
title: Formas
---

Shapes are [static objects](formObjects_overview.md#active-and-static-objects) that can be added to 4D forms.

4D forms support the following basic shapes:

- rectangles
- líneas
- óvalos


## Rectangle

A static rectangle is a decorative object for forms. Rectangles are constrained to squared shapes.

The design of rectangles is controlled through many properties (color, line thickness, pattern, etc.). Specifically, the [roundness](properties_CoordinatesAndSizing.md#corner-radius) of its corners can be defined.

![](assets/en/FormObjects/shapes_rectangle2.png)

#### Ejemplo JSON:

```4d
    "myRectangle": {
        "type": "rectangle",    //define el tipo de objeto
        "left": 60,             //posición izquierda en el formulario  
        "top": 160,             //posición superior en el formulario 
        "width": 100,           //ancho del objeto
        "height": 20,           //altura del objeto
        "borderRadius": 20      //definir la redondez de las esquinas
                }
```


#### Propiedades soportadas
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Línea

A static line is a decorative object for forms, drawn between two plots. Lines can be horizontal, vertical, or of any angle shapes.

The design of lines is controlled through many properties (color, line thickness, etc.).


### startPoint property
The `startPoint` JSON property defines from which coordinate to draw the line (see example).

> the `startPoint` property is not exposed in the Property List, where the line drawing direction is visible.



#### JSON Examples:

```
    "myLine": {
        "type": "line",                
        "left": 20,
        "top": 40,
        "width": 100,
        "height": 80,
        "startPoint": "topLeft", //primera orientación
        "strokeDashArray": "6 2" //punteado
        }
```
Result: ![](assets/en/FormObjects/shape_line1.png)


```
    "myLine": {
        "type": "line",                
        "left": 20,
        "top": 40,
        "width": 100,
        "height": 80,
        "startPoint": "bottomLeft", //segunda orientación
        "strokeDashArray": "6 2" //dashed
        }
```
Result: ![](assets/en/FormObjects/shape_line2.png)



#### Propiedades soportadas
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [startPoint](#startpoint-property) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Óvalo

A static oval is a decorative object for forms. Oval objects can be used to draw circular shapes (when [width](properties_CoordinatesAndSizing.md#width) and [height](properties_CoordinatesAndSizing.md#height) properties are equal).

![](assets/en/FormObjects/shape_oval.png)

#### Ejemplo JSON:

```4d
    "myOval": {
        "type": "oval",     //define el tipo de objeto
        "left": 60,         //posición izquierda en el formulario
        "top": 160,         //posición superior en el formulario 
        "width": 100,       //ancho del objeto
        "height": 20,       //altura del objeto
        "fill": "blue"      //define el color de fondo
                }
```


#### Propiedades soportadas
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 