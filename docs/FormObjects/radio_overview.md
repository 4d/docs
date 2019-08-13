---
id: radiobuttonOverview
title: Radio Button
---
## Overview

Radio buttons are objects that allow the user to select one of a group of buttons (a small bullseye with text). Each type of radio button is selected the same way — you click the object to select it. The remainder of this section uses the term “radio button” to mean any type of radio button.

>The appearance of radio buttons is set by the properties of the standard button family. For more information, refer to [Buttons](buttonOverview). 


Radio buttons are used in coordinated sets: only one button at a time can be selected in the set. In order to operate in a coordinated manner, a set of radio buttons must be grouped in the Form editor. To do this, you can use the `Radio Group` option in the Property List > [Objects](properties_Object.md#radio-group) theme or the corresponding JSON grammar. 

![](assets/en/FormObjects/radio1.png)

In previous versions of 4D, the coordinated behavior of a set of radio buttons was obtained by giving the same first letter to their associated variables (*e.g.*, m_button1, m_button2, m_button3, etc.). For compatibility reasons, this principle is kept by default in converted databases. You can, however, force the use of the new mode of operation (via the Form editor) by deselecting the option in the Database Settings (see [Compatibility page](https://doc.4d.com/4Dv17R5/4D/17-R5/Compatibility-page.300-4163483.en.html)). 

Radio buttons are controlled with methods. Like all buttons, a radio button is set to 0 when the form is first opened. A method associated with a radio button executes when the button is selected. 

The following is an example of a group of radio buttons used in a video collection database to enter the speed of the recording (SP, LP, or EP):

![](assets/en/FormObjects/radio2.png)

Selecting one radio button in a group sets that button to 1 and all of the others in the group to 0. Only one radio button can be selected at a time.

>You can also associate Boolean type variables with radio buttons. In this case, when a radio button in a group is selected its variable is True and the variables for the group's other radio buttons are False.

The value contained in a radio button object is not saved automatically (except if it is the representation of a Boolean field); radio button values must be stored in their variables and managed with methods.

## Button Styles

Radio button styles control a radio button's general appearance as well as its available properties. It is possible to apply different predefined styles to radio buttons. A great number of variations can be obtained by combining these properties / behaviors. 

With the exception of the available properties, many radio button objects are *structurally* identical. The difference is in the processing of their associated variables. 

4D provides radio buttons in the following predefined styles: 


### Regular

The Regular button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/radio_regular.png)

By default, the Regular style has a light gray background with a label in the center. When the cursor hovers over the Regular button style, the border and background color change to demonstrate that it has the focus. In addition to initiating code execution, the Regular button style mimics a mechanical button by quickly changing background color when being clicked.

#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",				//define the type of object
                "style":"regular",				//define the style 
                "text": "OK",					//text to appear 
                "action": "Cancel", 			//action to be be performed 
                "left": 60,						//left position on the form  
                "top": 160,						//top position on the form 
                "width": 100,			
                "height": 20		
                }
``` 


#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

### Flat

The Flat button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/radio_regular.png)

By default, the Flat style has a white background with a label in the center, rounded corners, and a minimalist appearance. In addition to initiating code execution, the Flat button style mimics a mechanical button by the background quickly changing color when being clicked.

The Flat button style's graphic nature is particularly useful for forms that will be printed.

#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",		//define the type of object
                "style":"flat",			//define the style 
                "text": "OK",			//text to appear 
                "action": "Cancel", 	//action to be be performed 
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			
                "height": 20			
                }
``` 

#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Toolbar

The Toolbar button style is primarily intended for integration in a toolbar. 

By default, the Toolbar style has a transparent background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted. 

![](assets/en/FormObjects/radio_toolbar.png)

 - *macOS* - the highlight of the button never appears. 
 
#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",				//define the type of object
                "style":"toolbar",				//define the style 
                "text": "OK",					//text to appear 
                "action": "Cancel", 			//action to be be performed 
                "left": 60,						//left position on the form  
                "top": 160,						//top position on the form 
                "width": 100,					
                "height": 20					
                }
``` 

#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Radio Group](properties_Object.md#radio-group) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Bevel

The Bevel button style combines the appearance of the [Regular](#regular) (*i.e.*, a rectangle with a descriptive label) style with the [Toolbar](#toolbar) style's behavior. 

By default, the Bevel style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted. 

  ![](assets/en/FormObjects/radio_gradient.png)

 - *macOS* - the highlight of the button never appears. 
 
#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",			//define the type of object
                "style":"bevel",			//define the style 
                "text": "OK",				//text to appear 
                "action": "Cancel", 		//action to be be performed 
                "left": 60,					//left position on the form  
                "top": 160,					//top position on the form 
                "width": 100,				
                "height": 20				
                }
``` 

#### Supported Properties

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Rounded Bevel

The Rounded Bevel button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel style, the Rounded Bevel style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

By default, the Rounded Bevel style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the [Bevel](#bevel) style. 

  ![](assets/en/FormObjects/radio_gradient.png)

 - *macOS* - the corners of the button are rounded. 

#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",		//define the type of object
                "style":"roundedBevel",	//define the style 
                "text": "OK",			//text to appear 
                "action": "Cancel", 	//action to be be performed 
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			
                "height": 20			
                }
``` 
 
#### Supported Properties

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### OS X Gradient

The OS X Gradient button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a two-toned appearance. As with the Bevel style, the OS X Gradient style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

By default, the OS X Gradient style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the [Bevel](#bevel) style. 

  ![](assets/en/FormObjects/radio_gradient.png)

 - *macOS* - the button is displayed as a two-tone system button. 
 
#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",			//define the type of object
                "style":"gradientBevel",	//define the style 
                "text": "OK",				//text to appear 
                "action": "Cancel", 		//action to be be performed 
                "left": 60,					//left position on the form  
                "top": 160,					//top position on the form 
                "width": 100,				
                "height": 20				
                }
``` 


#### Supported Properties

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)



### OS X Textured

The OS X Textured button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a different appearance. As with the Bevel style, the OS X Textured style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

By default, the OS X Textured style appears as:

 - *Windows* - a standard system button with a light gray background with a label in the center. It has the special feature of being transparent in Vista.
 
  ![](assets/en/FormObjects/radio_gradient.png)
 
 - *macOS* - a standard system button displaying a color change from light to dark gray. Its height is predefined: it is not possible to enlarge or reduce it.

#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",				//define the type of object
                "style":"texturedBevel",		//define the style 
                "text": "OK",					//text to appear 
                "action": "Cancel", 			//action to be be performed 
                "left": 60,						//left position on the form  
                "top": 160,						//top position on the form 
                "width": 100,					
                "height": 20					
                }
``` 


#### Supported Properties

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)



### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

The colors (highlight and background) of a button with the Office XP style are based on the system colors. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - its background only appears when the mouse rolls over it.

  ![](assets/en/FormObjects/radio_xp.png)

 - *macOS* - its background is always displayed.

#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",		//define the type of object
                "style":"office",		//define the style 
                "text": "OK",			//text to appear 
                "action": "Cancel", 	//action to be be performed 
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			
                "height": 20			
                }
``` 

#### Supported Properties

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Collapse / Expand

This button style can be used to add a standard collapse/expand icon. These buttons are used natively in hierarchical lists. In Windows, the button looks like a [+] or a [-]; in macOS, it looks like a triangle pointing right or down. 

![](assets/en/FormObjects/checkbox_collapse.png)


#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",		//define the type of object
                "style":"disclosure",		//define the style 
                "text": "OK",			//text to appear 
                "action": "Cancel", 	//action to be be performed 
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			
                "height": 20			
                }
``` 

#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Disclosure Button

In macOS and Windows, a button with the "Disclosure" style appears as a standard disclosure button, usually used to show/hide additional information. When used as a radio button, the button symbol points downwards with value 0 and upwards with value 1. 

When the "Disclosure button" style is selected, no options are available.

![](assets/en/FormObjects/checkbox_disclosure.png)


#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",		//define the type of object
                "style":"roundeddisclosure",		//define the style 
                "text": "OK",			//text to appear 
                "action": "Cancel", 	//action to be be performed 
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			
                "height": 20			
                }
``` 


#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Custom

The Custom button style accepts a personalized background picture and allows managing additional parameters such as icon and margin offsets. 


 
#### JSON Example:    

```code4d
	"myRadioButton": {
                "type": "radio",	//define the type of object
                "style":"custom",	//define the style 
                "text": "OK",		//text to appear 
                "iconOffset": 5, 	//define custom icon behavior 
                "left": 60,			//left position on the form  
                "top": 160,			//top position on the form 
                "width": 100,		
                "height": 20,
                "customBorderX": 20	, //set internal horizontal margin
                "customBorderY": 5	  //set internal vertical margin
                }
``` 

#### Supported Properties
[Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
