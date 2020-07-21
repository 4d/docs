---
id: shapesOverview
title: 図形
---

図形は、4D フォームに設置することのできる [スタティックオブジェクト](formObjects_overview.md#アクティブオブジェクトとスタティックオブジェクト) です。

次の基本の図形が提供されています:

- 四角
- 線
- 楕円

## 四角

フォーム上に四角を配置することで、視覚的な効果が得られます。 四角で描画できるのは長方形に限られます。

The design of rectangles is controlled through many properties (color, line thickness, pattern, etc.). Specifically, the [roundness](properties_CoordinatesAndSizing.md#corner-radius) of its corners can be defined.

![](assets/en/FormObjects/shapes_rectangle2.png)

#### JSON 例:

```4d
    "myRectangle": {
        "type": "rectangle",    //define the type of object
        "left": 60,             //left position on the form  
        "top": 160,             //top position on the form 
        "width": 100,           //width of the object
        "height": 20,           //height of the object
        "borderRadius": 20      //define the roundness of the corners
                }
```

#### プロパティ一覧

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Line

A static line is a decorative object for forms, drawn between two plots. Lines can be horizontal, vertical, or of any angle shapes.

The design of lines is controlled through many properties (color, line thickness, etc.).

### startPoint property

The `startPoint` JSON property defines from which coordinate to draw the line (see example).

> the `startPoint` property is not exposed in the Property List, where the line drawing direction is visible.

#### JSON Examples:

        "myLine": {
            "type": "line",                
            "left": 20,
            "top": 40,
            "width": 100,
            "height": 80,
            "startPoint": "topLeft", //first direction
            "strokeDashArray": "6 2" //dashed
            }
    

Result: ![](assets/en/FormObjects/shape_line1.png)

        "myLine": {
            "type": "line",                
            "left": 20,
            "top": 40,
            "width": 100,
            "height": 80,
            "startPoint": "bottomLeft", //2nd direction
            "strokeDashArray": "6 2" //dashed
            }
    

Result: ![](assets/en/FormObjects/shape_line2.png)

#### プロパティ一覧

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [startPoint](#startpoint-property) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Oval

A static oval is a decorative object for forms. Oval objects can be used to draw circular shapes (when [width](properties_CoordinatesAndSizing.md#width) and [height](properties_CoordinatesAndSizing.md#height) properties are equal).

![](assets/en/FormObjects/shape_oval.png)

#### JSON 例:

```4d
    "myOval": {
        "type": "oval",     //define the type of object
        "left": 60,         //left position on the form  
        "top": 160,         //top position on the form 
        "width": 100,       //width of the object
        "height": 20,       //height of the object
        "fill": "blue"      //define the background color
                }
```

#### プロパティ一覧

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)