---
id: buttonOverview
title: Buttons
---
## Overview

A button is an active object that can be added to a form and assigned an action to perform (*e.g.*, a database task or interface function) when a user clicks on it. Buttons can fulfill a variety of roles, depending on their style and the action assigned to it. For example, buttons could lead a user through a questionnaire or form to fill, or to make choices. Depending on its settings, a button may be designed to be clicked only once and execute a command, while others may require the user to click more than once to receive the desired result. Other buttons are designed to toggle behavior on and off. These kinds of buttons graphically indicate the state of the option.

The actions assigned to the buttons can originate from predefined [standard actions](#standard-actions) or from custom [object methods](#object-methods). Examples of typical actions include letting the user accept, cancel, or delete records, move between records, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc. 


<p>

## Using buttons
<p>
Using buttons is fairly straightforward. You simply add a button to a form and assign an action to it.

Adding a button to a form can be done via:

*  **Form editor:** Drag a button object from the Form editor onto the form. Then select *Button* from the **Type** drop-down list and the style of button (regular, toolbar, bevel, etc.) from the **Button Style** drop-down list.
*  **Code:** Define the properties for a button object using JSON. Example:<br>
`{"type": "button", "text": "OK",	"action": "Cancel",	"left": 60,	"top": 160,	"width": 100, 	"height": 20}` <br>
 See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for more information.
 
In addition to adding buttons to your forms, you can also modify their properties (*e.g.*, size, position, label, etc.). The properties available depend on the button's style. See the page for the specific button style you want to use for more information about its available properties.
 
Once you've added a button to your form, you can associate it to a standard action or an object method to perform a task when a user clicks on it. You can associate a method with any button style. Typically, you would activate the ___On Clicked___ event in the Events theme and the standard action or method would run only when the button is clicked. 




### Standard actions 

Predefined functions, known as standard actions, are available to perform routine tasks (*e.g.*, letting the user accept, cancel, or delete records, move between records, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc.). For more in-depth information about standard actions, see the [Standard Actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) page.

Standard actions can be associated to a button in two ways:

* **Property List:** Enter the name of the standard action you want to use or select it from the drop-down list in the **Standard action** section.  
* **Code:** Define the action using JSON. <br>Example: `{"events": "onDoubleClick"}`<br>
 See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for more information.


Buttons with standard actions are dimmed when appropriate during form execution. For example, if the first record of a table were displayed, a button with the *firstRecord* standard action would appear dimmed. 

If you want the button to perform an action not available as a standard action, left the Standard action field empty and write an object method that specifies the button’s action (see Editing methods).

### Object methods

If you want the button to perform an action not available as a standard action, leave the *Standard action* field empty and write an object method that specifies the button’s action (see [Using object methods](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html)).

## Button Styles

Button styles control the button's general appearance as well as the availability of its properties. A great number of variations can be obtained by combining these properties / behaviors. 

Many button objects are structurally identical; the only difference is the processing of their associated variables. See the page for the specific button style you want to use for more information about its available properties. 4D provides buttons in the following predefined styles: 


| Style| Summary Description | JSON |
|---|---|---|
|[Regular](#regular)|Standard system button <p><p>![](assets/en/FormObjects/button_regular.png)|{"style":"regular"}|
|[Toolbar](#toolbar)|Button with pop-up menu for integration in a toolbar<p><p>![](assets/en/FormObjects/button_toolbar.en.png)|{"style":"toolbar"}|
|[Bevel](#bevel)|Combines the appearance of the [Regular button](#regular) style with the [Toolbar button](#toolbar-button) button style's functionality.<p><p>![](assets/en/FormObjects/button_bevel.en.png) |{"style":"bevel"}|
|[Rounded Bevel](#Rounded-bevel)|Nearly identical to the [Bevel button](#bevel) style except, depending on the OS, the corners of the button may be rounded.<p><p>![](assets/en/FormObjects/button_roundedbevel.en.png)|{"style":"roundedBevel"}|
|[OS X Gradient](#os-x-gradient)|Nearly identical to the [Bevel Button](#bevel) style except, depending on the OS, it may have a two-toned appearance.<p><p>![](assets/en/FormObjects/button_osxgradient.en.png)|{"style":"gradientBevel"}|
|[OS X Textured](#os-x-textured)|Nearly identical to the [Bevel Button](#bevel) style except, depending on the OS, it may have a different appearance.<p><p>![](assets/en/FormObjects/button_osxtextured.en.png)|{"style":"texturedBevel"}|
|[Office XP](#office-XP)|Combines the appearance of the [Regular button](#regular) style with the [Toolbar button](#toolbar-button) button style's functionality.<p><p>![](assets/en/FormObjects/button_officexp.en.png)|{"style":"office"}|
|[Help](#help)|Standard system help button<p><p>![](assets/en/FormObjects/button_help.en.png)|{"style":"help"}|
|[Circle](#circle)|Round system button<p><p>![](assets/en/FormObjects/button_circle.en.png)|{"style":"circular"}|
|[Custom](#custom)|Accepts a custom background picture and additional parameters<p><p>![](assets/en/FormObjects/button_custom.en.png)|{"style":"custom"}|



### Regular

The Regular button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

By default, the Regular button style has a light gray background with a label in the center. When the cursor hovers over the Regular button style, the border and background color change to demonstrate that it has the focus. In addition to initiating code execution, the Regular button style mimics a mechanical button by quickly changing background color when being clicked.

**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Default Button](../Properties/property_defaultButton) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width)  

### Toolbar

The Toolbar button style is primarily intended for integration in a toolbar. It includes the option to add a pop-up menu (indicated by an inverted triangle). This style of button is generally used to display additional choices for the user to select from.

By default, the Toolbar button style has a transparent background with a label in the center

The appearance of the Toolbar button style can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted when it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button. 

 - *macOS* - the highlight of the button never appears. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Default Button](../Properties/property_defaultButton) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) - [With pop-up menu](../Properties/property_withPopupMenu)



### Bevel

The Bevel button style combines the appearance of the [Regular button](#regular) (*i.e.*, a rectangle with a descriptive label) with the [Toolbar button](#toolbar) button's pop-up menu property option. 

By default, the Bevel button style has a light gray background with a label in the center. The appearance of the Bevel button style can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button. 

 - *macOS* - the highlight of the button never appears. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button. 
 
**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) - [With pop-up menu](../Properties/property_withPopupMenu)
 

### Rounded Bevel

The Rounded Bevel button style is nearly identical to the [Bevel button](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel button style, the Rounded Bevel button style combines the appearance of the [Regular button](#regular) style (*i.e.*, a rectangle with a descriptive label) with the [Toolbar button](#toolbar) style's pop-up menu property option. 

By default, the Rounded Bevel button style has a light gray background with a label in the center. 
The appearance of the Rounded Bevel button style can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the Bevel button style. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button. 

 - *macOS* - the corners of the button are rounded. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.
 
**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) - [With pop-up menu](../Properties/property_withPopupMenu)
 

### OS X Gradient

The OS X Gradient button style is nearly identical to the [Bevel button](#bevel) style except, depending on the OS, it may have a two-toned appearance. As with the Bevel button style, the OS X Gradient button style combines the appearance of the [Regular button](#regular) style (*i.e.*, a rectangle with a descriptive label) with the [Toolbar button](#toolbar) style's pop-up menu property option. 

By default, the OS X Gradient button style has a light gray background with a label in the center. 
The appearance of the OS X Gradient button style can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the Bevel button style. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button. 

 - *macOS* - the button is displayed as a two-tone system button. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.
 
 **Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) - [With pop-up menu](../Properties/property_withPopupMenu)

### OS X Textured

The OS X Textured button style is nearly identical to the [Bevel button](#bevel) style except, depending on the OS, it may have a different appearance. As with the Bevel button style, the OS X Textured button style combines the appearance of the [Regular button](#regular) style (*i.e.*, a rectangle with a descriptive label) with the [Toolbar button](#toolbar) style's pop-up menu property option. 

By default, the OS X Textured button style appears as:

 - *Windows* - a standard system button with a light gray background with a label in the center. It has the special feature of being transparent in Vista.
 
 - *macOS* - a standard system button displaying a color change from light to dark gray. Its height is predefined: it is not possible to enlarge or reduce it.


The appearance of the OS X Textured button style can also be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the Bevel button style. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button. 

 - *macOS* - the button is displayed as a two-tone system button. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.<p>
 
**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) - [With pop-up menu](../Properties/property_withPopupMenu)

### Office XP

The Office XP button style combines the appearance of the [Regular button](#regular) style (*i.e.*, a rectangle with a descriptive label) with the [Toolbar button](#toolbar) button style's transparency and pop-up menu property option. 

The colors (highlight and background) of a button with the Office XP button style are based on the system colors. The appearance of the Office XP button style can be different when the cursor hovers over it depending on the OS:

 - *Windows* - its background only appears when the mouse rolls over it.

 - *macOS* - its background is always displayed.

**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) - [With pop-up menu](../Properties/property_withPopupMenu)




### Help 


The Help button style can be used to display a standard help button of the system. You can use this style to add "system" help buttons in your forms.
 
By default, the Help button style is displayed as a question mark within a circle.

**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Object Name](../Properties/property_objectName) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) 


### Circle

In macOS, a button with the “Circle” style appears as a round system button. Two set styles are available for the circle, which depend on the size of the button in the form. In Windows, this button style is identical to the “None” style (the circle in the background is not taken into account).

**Supported Properties**<br>
[Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) - [With pop-up menu](../Properties/property_withPopupMenu)


### Custom

This button style accepts a custom background picture and allows managing various additional parameters (icon and margin offset). 

**Supported Properties**<br>
[Background pathname](../Properties/property_backgroundPathname) - [Bold](../Properties/property_bold) - [Bottom](../Properties/property_bottom) - [Button Style](../Properties/property_buttonStyle) - [Droppable](../Properties/property_droppable) - [Focusable](../Properties/property_focusable) - [Font](../Properties/property_font) - [Font Color](../Properties/property_fontColor) - [Height](../Properties/property_height) - [Help Tip](../Properties/property_helpTip) - [Horizontal Margin](../Properties/property_horizontalMargin) - [Horizontal Sizing](../Properties/property_horizontalSizing) - [Icon Offset](../Properties/property_iconOffset) - [Italic](../Properties/property_italic) - [Left](../Properties/property_left) - [Not rendered](../Properties/property_notRendered) - [Number of States](../Properties/property_numberOfStates) - [Object Name](../Properties/property_objectName) - [Picture pathname](../Properties/property_picturePathname) - [Right](../Properties/property_right) - [Shortcut](../Properties/property_shortcut) - [Title](../Properties/property_title) - [Title/Picture Position](../Properties/property_titlePicturePosition) - [Top](../Properties/property_top) - [Type](../Properties/property_type) - [Underline](../Properties/property_underline) - [Variable or Expression](../Properties/property_variableOrExpression) - [Vertical Margin](../Properties/property_verticalMargin) - [Vertical Sizing](../Properties/property_verticalSizing) - [Visibility](../Properties/property_visibility) - [Width](../Properties/property_width) 