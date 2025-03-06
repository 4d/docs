---
id: checkboxOverview
title: Check Box
---

A check box is a type of button used to enter or display binary (true-false) data. Basically, it is either checked or unchecked, but a [third state](#three-states-check-box) can be defined.

![](../assets/en/FormObjects/checkbox.png)

Check boxes are controlled by methods or [standard actions](#using-a-standard-action). The method associated with it executes when the check box is selected. Like all buttons, a check box variable is set to 0 when the form is first opened. 

A check box displays text next to a small square. This text is set in the [Title](properties_Object.md#title) property of the check box. You can enter a title in the form of an XLIFF reference in this area (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)). 


## Using check boxes

A check box can be associated to a [variable or expression](properties_Object.md#variable-or-expression) of type integer or boolean.

- **integer:** if the box is checked, the variable has the value 1. When not checked, it has the value 0. If check box is in third state (see below), it has the value 2.
- **boolean:** if the box is checked, the variable has the value `True`. When not checked, it has the value `False`. 

Any or all check boxes in a form can be checked or unchecked. Multiple check boxes allow the user to select multiple options. 


### Three-States check box 

Check box objects with [Regular](checkbox_overview.md#regular) and [Flat](checkbox_overview.md#flat) [button style](properties_TextAndPicture.md#button-style) accept a third state. This third state is an intermediate status, which is generally used for display purposes. For example, it allows indicating that a property is present in a selection of objects, but not in each object of the selection. 

![](../assets/en/FormObjects/checkbox_3states.png)

To enable this third state, you must select the [Three-States](properties_Display.md#three-states) property.

This property is only available for regular and flat check boxes associated with numeric [variables or expressions](properties_Object.md#variable-or-expression) — check boxes for Boolean expressions cannot use the [Three-States](properties_Display.md#three-states) property (a Boolean expression cannot be in an intermediary state). 

The variable associated with the check box returns the value 2 when the check box is in the third state. 

>In entry mode, the Three-States check boxes display each state sequentially, in the following order: unchecked / checked / intermediary / unchecked, etc. The intermediary state is generally not very useful in entry mode; in the code, simply force the value of the variable to 0 when it takes the value of 2 in order to pass directly from the checked state to the unchecked state.


## Using a standard action

You can assign a [standard action](properties_Action.md#standard-action) to a check box to handle attributes of text areas. For example, if you assign the `fontBold` standard action, at runtime the check box will manage the "bold" attribute of the selected text in the current area. 

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

For detailed information on these actions, please refer to the [Standard actions](properties_Action.md#standard-action) section.

## Check box button styles

Check boxes use [button styles](properties_TextAndPicture.md#button-style) to control a check box's general appearance as well as its available properties. It is possible to apply different predefined styles to check boxes. A great number of variations can be obtained by combining these properties / behaviors. 

With the exception of the [available properties](#supported-properties), many check box objects are *structurally* identical. The difference is in the processing of their associated variables. 

4D provides check boxes in the following predefined button styles: 

### Regular

The Regular check box button style is a standard system check box (*i.e.*, a rectangle with a descriptive title):

![](../assets/en/FormObjects/checkbox_regular.png)

#### JSON Example:    

```
	"myCheckBox": {
		"type": "checkbox",	
		"style":"regular",
		"text": "Cancel",	
		"action": "Cancel", 	
		"left": 60,			
		"top": 160,		
		"width": 100,			
		"height": 20		
		"dataSourceTypeHint":"boolean"
		}
``` 



### Flat

The Flat check box button style is a minimalist appearance. The Flat style's graphic nature is particularly useful for forms that will be printed.

![](../assets/en/FormObjects/checkbox_flat.png)

#### JSON Example:  

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"flat",
			"text": "Cancel",	
			"action": "cancel", 
			"left": 60,		
 			"top": 160,	
 			"width": 100,			
			"height": 20			
			}
``` 



### Toolbar Button

The Toolbar Button check box button style is primarily intended for integration in a toolbar. 

The Toolbar Button check box button style has a transparent background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).  

Example with states unchecked / checked / highlighted:

![](../assets/en/FormObjects/checkbox_toolbar.png)

 
#### JSON Example:    

```
	"myCheckBox": {
                "type": "checkbox",
                "style":"toolbar",	
                "text": "Checkbox",
				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
                "left": 60,	
                "top": 160,	
                "width": 100,					
                "height": 20					
                }
``` 



### Bevel

The Bevel check box button style combines the appearance of the [Regular](#regular) button style (*i.e.*, a rectangle with a descriptive title) with the [Toolbar Button](#toolbar-button) button style's behavior. 

The Bevel button style has a light gray background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).  

Example with states unchecked / checked / highlighted:

![](../assets/en/FormObjects/checkbox_bevel.png)
 
  
#### JSON Example:    

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"bevel",
                "text": "Checkbox",	 
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
              	"left": 60,	
                "top": 160,	
                "width": 100,				
                "height": 20				
                }
``` 



### Rounded Bevel

The Rounded Bevel check box button style is nearly identical to the [Bevel](#bevel) button style except, depending on the OS, the corners of the button may be rounded. As with the Bevel button style, the Rounded Bevel button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior. 

The Rounded Bevel button style has a light gray background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states). 

Example on macOS:

  ![](../assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> On Windows, the Rounded Bevel button style is identical to the [Bevel](#bevel) button style. 
 

#### JSON Example:    

```4d
	"myCheckBox": {
                "type": "checkbox",	
                "style":"roundedBevel",	 
                "text": "Checkbox",	
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
                "left": 60,	
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
``` 
 


### OS X Gradient

The OS X Gradient check box button style is nearly identical to the [Bevel](#bevel) button style. As with the Bevel button style, the OS X Gradient button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior. 

The OS X Gradient button style has a light gray background with a title and may be displayed as a two-tone system button on macOS. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).  

  ![](../assets/en/FormObjects/checkbox_osxgradient_mac.png)

> On Windows, this check box button style is identical to the [Bevel](#bevel) button style. 

 
#### JSON Example:    

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"gradientBevel", 
			"text": "Checkbox",	
			"icon": "/RESOURCES/File.png",
			"iconFrames": 4
			"left": 60,		
			"top": 160,		
			"width": 100,				
			"height": 20				
           }
``` 




### OS X Textured

The OS X Textured button style is similar to the [Bevel](#bevel) button style but with a smaller size (maximum size is the size of a standard macOS system button). As with the Bevel button style, the OS X Textured button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.   

By default, the OS X Textured button style appears as:

 - *Windows* - a standard system button with a light blue background with a title in the center. 
 
  ![](../assets/en/FormObjects/checkbox_osxtextured.png)
 
 - *macOS* - a standard system button. Its height is predefined: it is not possible to enlarge or reduce it.
 
  ![](../assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### JSON Example:    

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"texturedBevel", 
			"text": "Checkbox",	
			"left": 60,	
			"top": 160,	
			"width": 100,					
			"height": 20					
			}
``` 




### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior. 

The colors (highlight and background) of a check box with the Office XP button style are based on the system colors. The appearance of the check box can be different when the cursor hovers over it, depending on the OS:

 - *Windows* - its background only appears when the mouse rolls over it. Example with states unchecked / checked / highlighted:

  ![](../assets/en/FormObjects/checkbox_officexp.png)

 - *macOS* - its background is always displayed. Example with states unchecked / checked:
 
  ![](../assets/en/FormObjects/checkbox_officexp_mac.png)

#### JSON Example:    

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"office",
                "text": "Checkbox",	 
                "action": "fontBold",
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 	
               "left": 60,	
                "top": 160,		
                "width": 100,			
                "height": 20			
                }
``` 



### Collapse/Expand

This check box button style can be used to add a standard collapse/expand icon. These icons are used natively in hierarchical lists. 

 - *Windows* - the icon looks like a [+] or a [-]

  ![](../assets/en/FormObjects/checkbox_collapse.png)

 - *macOS* - it looks like a triangle pointing right or down.
 
  ![](../assets/en/FormObjects/checkbox_collapse_mac.png)

:::info

The Collapse/Expand style is named "disclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::


#### JSON Example:    

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"disclosure",
				"method": "m_collapse",
				"left": 60,	
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
``` 



### Disclosure

In macOS and Windows, a check box with the "Disclosure" button style appears as a standard disclosure button, usually used to show/hide additional information. When used as a radio button, the button symbol points downwards with value 0 and upwards with value 1. 

 - *Windows* 

	![](../assets/en/FormObjects/checkbox_disclosure.png)

 - *macOS*
 
	![](../assets/en/FormObjects/checkbox_disclosure_mac.png)

:::info

The Disclosure style is named "roundedDisclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::


#### JSON Example:    

```
	"myCheckBox": {
                "type": "checkbox",		
                "style":"roundedDisclosure",	
				"method": "m_disclose",
                "left": 60,		
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
``` 


### Custom

The Custom button style accepts a personalized background picture and allows managing specific properties:

- [Background pathname](properties_TextAndPicture.md#background-pathname)
- [Icon Offset](properties_TextAndPicture.md#icon-offset)
- [Horizontal Margin](properties_TextAndPicture.md#horizontal-margin) and [Vertical Margin](properties_TextAndPicture.md#vertical-margin)

It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states), that can be used in conjunction with a [4-state](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#background-pathname). 
 
#### JSON Example:    

```
	"myCheckbox": {
		"type": "checkbox",
		"style":"custom",
		"text": "OK", 
		"icon": "/RESOURCES/smiley.jpg", 
		"iconFrame": 4, 
		"customBackgroundPicture": "/RESOURCES/paper.jpg", 
		"iconOffset": 5, //custom icon offset when clicked
		"left": 60,	
		"top": 160,	
		"width": 100,		
		"height": 20,
		"customBorderX": 20,
		"customBorderY": 5
		}
``` 




## Supported Properties

All check boxes share the same set of basic properties:  


[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment)(1) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(2) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Number of States](properties_TextAndPicture.md#number-of-states)(2) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(2) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#titlepicture-position)(2) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

> (1) Not supported by the [Regular](#regular) and [Flat](#flat) styles.<br/>
> (2) Not supported by the [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) and [Collapse/Expand](#collapseexpand) styles.

Additional specific properties are available, depending on the [button style](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#background-pathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontal-margin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#vertical-margin)
- Flat, Regular: [Three-States](properties_Display.md#three-states)