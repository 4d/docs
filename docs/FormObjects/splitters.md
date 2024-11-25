---
id: splitters
title: Splitter
---



A splitter divides a form into two areas, allowing the user to enlarge and reduce the areas by moving the splitter one way or the other. A splitter can be either horizontal or vertical. The splitter takes into account each object’s resizing properties, which means that you can completely customize your application's interface. A splitter may or may not be a “pusher.”

Splitter are used for example in output forms so that columns can be resized:

![](../assets/en/FormObjects/split1.png)


Some of the splitter’s general characteristics:

*	You can place as many splitters as you want in any type of form and use a mixture of horizontal and vertical splitters in the same form.
*	A splitter can cross (overlap) an object. This object will be resized when the splitter is moved.
*	Splitter stops are calculated so that the objects moved remain entirely visible in the form or do not pass under/next to another splitter. When the [Pusher](properties_ResizingOptions.md#pusher) property is associated with a splitter, its movement to the right or downward does not encounter any stops.
*	If you resize a form using a splitter, the new dimensions of the form are saved only while the form is being displayed. Once a form is closed, the initial dimensions are restored.

Once it is inserted, the splitter appears as a line. You can modify its [border style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) to obtain a thinner line or [change its color](properties_BackgroundAndBorder.md#line-color). 

#### JSON Example:    

```4d
"mySplitter": {
	"type": "splitter",
	"left": 60,  
	"top": 160,   
	"width": 100,  
	"height": 20,  
	"splitterMode": "move"  //pusher
	}
``` 


### Supported Properties

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) -  [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

## Interaction with the properties of neighboring objects  

In a form, splitters interact with the objects that are around them according to these objects’ resizing options:

|Resizing options for the object(s)	|Object(s) above an horizontal splitter or to the left of a vertical splitter (1)	|Object(s) below an horizontal *non-Pusher* splitter or to the right of a vertical *non-Pusher* splitter|Object(s) below an horizontal *Pusher* splitter or to the right of a vertical *Pusher* splitter |
|---|---|---|---|
|None	|Remain as is	|Are moved with the splitter (position relative to the splitter is not modified) until the next stop. The stop when moving to the bottom or right is either the window’s border, or another splitter.	|Are moved with the splitter (position relative to the splitter is not modified) indefinitely. No stop is applied (see the next paragraph)|
|Resize	|Keep original position(s), but are resized according to the splitter’s new position	| | |
|Move	|Are moved with the splitter	| |  |

*(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position.*

>An object completely contained in the rectangle that defines the splitter is moved at the same time as the splitter.

## Managing splitters programmatically  


You can associate an object method with a splitter and it will be called with the `On Clicked` event throughout the entire movement.

A [variable](properties_Object.md#variable-or-expression) of the *Longint* type is associated with each splitter. This variable can be used in your object and/or form methods. Its value indicates the splitter’s current position, in pixels, in relation to its initial position.

*	If the value is negative: the splitter was moved toward the top or toward the left,
*	If the value is positive: the splitter was moved toward the bottom or toward the right,
*	If the value is 0: the splitter was moved to its original position. 

You can also move the splitter programmatically: you just have to set the value of the associated variable. For example, if a vertical splitter is associated with a variable named `split1`, and if you execute the following statement: `split1:=-10`, the splitter will be moved 10 pixels to the left — as if the user did it manually. The move is actually performed at the end of the execution of the form or object method containing the statement. 
