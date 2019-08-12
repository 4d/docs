---
id: checkboxOverview
title: Check Box
---
## Overview

A check box is a type of button used to enter or display binary (true-false) data. It is either selected or deselected. Check boxes are controlled by methods. Like all buttons, a check box is set to 0 when the form is first opened. The method associated with a it executes when the check box is selected.

A check box displays text next to a small square. This text is set in the Title area of the [Objects](properties_Object.md#radio-group) theme in the Property List or with JSON. You can enter a title in the form of an XLIFF reference in this area (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)). 


## Using check boxes

When the user clicks the object, the box is checked. When checked, a check box has the value 1. When not checked, it has the value 0. 

You can also associate a Boolean type variable with a check box. In this case, the variable is True when it's checked and False when it's not checked.

Any or all check boxes in a form can be checked or unchecked. 

![](assets/en/FormObjects/checkbox.png)

A group of check boxes allows the user to select multiple options. 

Unlike a Boolean field that is formatted as a check box, the values of the check box variable are not stored automatically. A method is uses to manage the variable.

>Check boxes have the same behavior as standard buttons but their appearance is set by the properties of the standard button family. For more information, refer to [Buttons](buttonOverview).


## Three-States check box 

Check box objects accept a third state. This third state is an intermediate status, which is generally used for display purposes. For example, it allows indicating that a property is present in a selection of objects, but not in each object of the selection. 

![](assets/en/FormObjects/checkbox_3states.png)

In order for a check box to take control of this third state, you must set the Three-States property in the [Display](properties_Display.md#three-states) theme of the Property List or via JSON.

This property is only available for check boxes ([Regular](button_overview.md#regular) and [Flat](button_overview.md#flat) button styles only) associated with numeric variables — check boxes for Boolean fields cannot use the [Three-States](properties_Display.md#three-states) property (a Boolean field cannot be in an intermediary state). 

The variable associated with the check box returns the value 2 when the check box is in the third state. 

>In entry mode, the Three-States check boxes display each state sequentially, in the following order: unchecked / checked / intermediary / unchecked, etc. The intermediary state is generally not very useful in entry mode; in the code, simply force the value of the variable to 0 when it takes the value of 2 in order to pass directly from the checked state to the unchecked state.


## Using a standard action

You can assign a standard action to a check box (using the [OBJECT SET ACTION](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-ACTION.301-4128268.en.html) command or the [Action](properties_Action.md#standard-action) theme of the Property List) to handle attributes of text areas. For example, if you select the `fontBold` standard action, at runtime the check box will manage the "bold" attribute of the selected text in the current area. 

Only actions that can represent a true/false status ("checkable" actions) are supported by this object: 

|Supported actions|	Usage condition (if any)|
|---|---|
|avoidPageBreakInsideEnabled|	4D Write Pro areas only|
|fontItalic	||
|fontBold	||
|fontLinethrough	||
|fontSubscript	|4D Write Pro areas only|
|fontSuperscript	|4D Write Pro areas only|
|fontUnderline	||
|font/showDialog	|Mac only|
|htmlWYSIWIGEnabled	|4D Write Pro areas only|
|section/differentFirstPage	|4D Write Pro areas only|
|section/differentLeftRightPages	|4D Write Pro areas only|
|spell/autoCorrectionEnabled	||
|spell/autoDashSubstitutionsEnabled	|Mac only|
|spell/autoLanguageEnabled	|Mac only|
|spell/autoQuoteSubstitutionsEnabled	|Mac only|
|spell/autoSubstitutionsEnabled	||
|spell/enabled	||
|spell/grammarEnabled	|Mac only|
|spell/showDialog	|Mac only|
|spell/visibleSubstitutions	||
|visibleBackground	|4D Write Pro areas only|
|visibleFooters	|4D Write Pro areas only|
|visibleHeaders	|4D Write Pro areas only|
|visibleHiddenChars	|4D Write Pro areas only|
|visibleHorizontalRuler	|4D Write Pro areas only|
|visiblePageFrames	|4D Write Pro areas only|
|visibleReferences	||
|widowAndOrphanControlEnabled	|4D Write Pro areas only|

For detailed information on these actions, please refer to the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section.

## Button Styles

Check box button styles control a check box's general appearance as well as its available properties. It is possible to apply different predefined styles to check boxes. A great number of variations can be obtained by combining these properties / behaviors. 

With the exception of the available properties, many check box objects are *structurally* identical. The difference is in the processing of their associated variables. 

4D provides check boxes in the following predefined styles: 

### Regular

The Regular button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/checkbox_regular.png)

By default, the Regular style has a light gray background with a label in the center. When the cursor hovers over the Regular button style, the border and background color change to demonstrate that it has the focus. In addition to initiating code execution, the Regular button style mimics a mechanical button by quickly changing background color when being clicked.

#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",				//define the type of object
                "style":"regular",				//define the style 
                "text": "OK",					//text to appear 
                "action": "Cancel", 			//action to be be performed 
                "left": 60,						//left position on the form  
                "top": 160,						//top position on the form 
                "width": 100,			
                "height": 20		
                "dataSourceTypeHint":"boolean"	//define true/false choice	
                }
``` 


#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Three-States](properties_Display.md#three-states) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

### Flat

The Flat button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/checkbox_regular.png)

By default, the Flat style has a white background with a label in the center, rounded corners, and a minimalist appearance. In addition to initiating code execution, the Flat button style mimics a mechanical button by the background quickly changing color when being clicked.

The Flat button style's graphic nature is particularly useful for forms that will be printed.

#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",		//define the type of object
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
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Three-States](properties_Display.md#three-states) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Toolbar

The Toolbar button style is primarily intended for integration in a toolbar. 

By default, the Toolbar style has a transparent background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted. 

![](assets/en/FormObjects/checkbox_toolbar.png)

 - *macOS* - the highlight of the button never appears. 
 
#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",				//define the type of object
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
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Bevel

The Bevel button style combines the appearance of the [Regular](#regular) (*i.e.*, a rectangle with a descriptive label) style with the [Toolbar](#toolbar) style's behavior. 

By default, the Bevel style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted. 

![](assets/en/FormObjects/checkbox_bevel.png)

 - *macOS* - the highlight of the button never appears. 
 
#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",			//define the type of object
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

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Rounded Bevel

The Rounded Bevel button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel style, the Rounded Bevel style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

By default, the Rounded Bevel style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the [Bevel](#bevel) style. 

  ![](assets/en/FormObjects/checkbox_bevel.png)

 - *macOS* - the corners of the button are rounded. 

#### JSON Example:    

```code4d
	"myCheckBopx": {
                "type": "checkbox",		//define the type of object
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

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### OS X Gradient

The OS X Gradient button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a two-toned appearance. As with the Bevel style, the OS X Gradient style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

By default, the OS X Gradient style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the [Bevel](#bevel) style. 

  ![](assets/en/FormObjects/checkbox_bevel.png)

 - *macOS* - the button is displayed as a two-tone system button. 
 
#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",			//define the type of object
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

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)



### OS X Textured

The OS X Textured button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a different appearance. As with the Bevel style, the OS X Textured style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

By default, the OS X Textured style appears as:

 - *Windows* - a standard system button with a light gray background with a label in the center. It has the special feature of being transparent in Vista.
 
  ![](assets/en/FormObjects/checkbox_bevel.png)
 
 - *macOS* - a standard system button displaying a color change from light to dark gray. Its height is predefined: it is not possible to enlarge or reduce it.

#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",				//define the type of object
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

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)



### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior. 

The colors (highlight and background) of a button with the Office XP style are based on the system colors. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - its background only appears when the mouse rolls over it.

  ![](assets/en/FormObjects/checkbox_bevel.png)

 - *macOS* - its background is always displayed.

#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",		//define the type of object
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

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Collapse / Expand

This button style can be used to add a standard collapse/expand icon. These buttons are used natively in hierarchical lists. In Windows, the button looks like a [+] or a [-]; in macOS, it looks like a triangle pointing right or down. 

![](assets/en/FormObjects/checkbox_collapse.png)

#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",		//define the type of object
                "style":"disclosure",	//define the style 
                "text": "OK",			//text to appear 
                "action": "Cancel", 	//action to be be performed 
                "left": 60,				//left position on the form  
                "top": 160,				//top position on the form 
                "width": 100,			
                "height": 20			
                }
``` 

#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Disclosure Button

In macOS and Windows, a button with the "Disclosure" style appears as a standard disclosure button, usually used to show/hide additional information. When used as a radio button, the button symbol points downwards with value 0 and upwards with value 1. 

![](assets/en/FormObjects/checkbox_disclosure.png)

When the "Disclosure button" style is selected, no options are available.

#### JSON Example:    

```code4d
	"myCheckBox": {
                "type": "checkbox",			//define the type of object
                "style":"roundedDisclosure",	//define the style 
                "text": "OK",				//text to appear 
                "action": "Cancel", 		//action to be be performed 
                "left": 60,					//left position on the form  
                "top": 160,					//top position on the form 
                "width": 100,			
                "height": 20			
                }
``` 

#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 


### Custom

The Custom button style accepts a personalized background picture and allows managing additional parameters such as icon and margin offsets. 


 
#### JSON Example:    

```code4d
	"myCheckbox": {
                "type": "checkbox",	//define the type of object
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
[Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
