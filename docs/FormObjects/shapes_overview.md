---
id: shapesOverview
title: Shapes
---

Shapes are static objects that can be added to 4D forms.


## Using shapes  

To draw a shape, select the corresponding button from the **Object** menu and then trace the object on the form. 

After creating an object, you can modify its type using the Property List. Hold down the **Shift** key as you draw to constrain the object to a regular shape.

## Shape types  

### Rectangle

A static rectangle object whose properties (color, line thickness, pattern, etc.) can be specified either using the Property list or by programming.

![](assets/en/FormObjects/shapes_rectangle2.png)

Rectangles are constrained to squared shapes.

#### JSON Example:    

```code4d
	"myRectangle": {
                "type": "rectangle",	//define the type of object
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			//width of the object
                "height": 20,			//height of the object
                "borderRadius": 20		//define the roundness of the corners
                }
``` 


#### Supported Properties
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

### Line

A static line object whose properties (color, line thickness, etc.) can be specified using the Property list.

![](assets/en/FormObjects/shape_line.png)

Lines are constrained to horizontal, 45°, or vertical shapes.


#### JSON Example:    

```code4d
	"myLine": {
                "type": "line",			//define the type of object               
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			//width of the object
                "height": 20,			//height of the object
                "borderStyle": "dashed"	//define the style of the line
                }
``` 


#### Supported Properties
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

### Oval

A static oval object whose properties (color, line thickness, pattern, etc.) can be specified using the Property list.

![](assets/en/FormObjects/shape_oval.png)

Ovals are constrained to circular shapes.

#### JSON Example:    

```code4d
	"myOval": {
                "type": "oval",		//define the type of object
                "left": 60,			//left position on the form  
                "top": 160,			//top position on the form 
                "width": 100,		//width of the object
                "height": 20,		//height of the object
                "fill": "blue"		//define the background color
                }
``` 


#### Supported Properties
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 