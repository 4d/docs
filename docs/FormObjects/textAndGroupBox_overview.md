---
id: textAndGroupBoxOverview
title: Text and Group Box
---




## Text

A text object allows you to display static written content (*e.g.*, instructions, titles, labels, etc.) on a form. These static text areas can become dynamic when they include dynamic references. For more information, refer to [Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html).   


#### JSON Example:    

```code4d
	"myText": {
                "type": "text",			//define the type of object
                "text": "Hello World!",	//define the content
                "textAlign": "center",	//define the alignment
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			//width of the object
                "height": 20			//height of the object
                }
``` 


#### Supported Properties
[Border Line Style](properties_BackgroundAndBorder.md) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Fill Color](properties_BackgroundAndBorder.md#fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Right](properties_CoordinatesAndSizing.md#right) - [Title](properties_Object.md#title) -[Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 


## Group Box

A group box allows you to visually assemble multiple form objects:

![](assets/en/FormObjects/groupBox.png)

>The name of a group box is static text; you can use a “localizable” reference as with any 4D label (see [Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html) and [COPY SET](https://doc.4d.com/4Dv17R5/4D/17-R5/COPY-SET.301-4127666.en.html)).



#### JSON Example:    

```code4d
	"myGroup": {
                "type": "groupBox",		//define the type of object
                "title": "Contact Info"	//define the object's title
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			//width of the object
                "height": 20			//height of the object
                }
``` 


#### Supported Properties
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 