---
id: radiobuttonOverview
title: Radio Button
---
## Overview

Radio buttons are objects that allow the user to select one of a group of buttons. A radio button shows a small bull’s-eye and text. 

>Radio buttons have identical operation but their appearance is set by the properties of the standard button family. For more information, refer to [Buttons](buttonOverview). 

Each type of radio button is selected the same way — you click the object to select it. 

The remainder of this section uses the term “radio button” to mean any type of radio button.

Radio buttons are used in coordinated sets: only one button at a time can be selected in the set. To operate in a coordinated manner, a set of radio buttons must be grouped in the Form editor. To do this, you can use the `Group` command in the **Object** menu or the corresponding button of the form toolbar. 

![](assets/en/FormObjects/radio1.png)

In previous versions of 4D, the coordinated behavior of a set of radio buttons was obtained by giving the same first letter to their associated variables (for example, m_button1, m_button2, m_button3, etc.). For compatibility reasons, this principle is kept by default in converted databases. However, you can force the use of this new mode of operation in the Database Settings (see [Compatibility page](https://doc.4d.com/4Dv17R5/4D/17-R5/Compatibility-page.300-4163483.en.html)). 

The effects of radio buttons are controlled with methods. Like all buttons, a radio button is set to 0 when the form is first opened. A method associated with a radio button executes when it is selected. 

The following is an example of a group of radio buttons used in a video collection database to enter the speed of the recording (SP, LP, or EP).

![](assets/en/FormObjects/radio2.png)

Selecting one radio button in a group sets that button to 1 and all the others in the group to 0. Only one radio button can be selected at a time.

>You can also associate Boolean type variables with radio buttons. In this case, when a radio button in a group is selected its variable is True and the variables for all the other radio buttons are False.

The value contained in a radio button object is not saved automatically (except if it is the representation of a Boolean field); radio button values must be stored in their variables and managed using methods.

## Button Styles

Radio buttons include the same styles as [Buttons](buttonOverview) with the following two additional styles:

### Collapse / Expand

This button style can be used to add a standard collapse/expand icon. These buttons are used natively in hierarchical lists. In Windows, the button looks like a [+] or a [-]; in Mac OS, it looks like a triangle pointing right or down. This style is only used with 3D checkboxes, where the two states of the button correspond to the selected/deselected state of the check box.

![](assets/en/FormObjects/radio_collapse_expand.png)


#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - Expression Type - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - Radio Group - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


### Disclosure Button

In macOS and Windows, a button with the "Disclosure" style appears as a standard disclosure button, usually used to show/hide additional information. When used as a check box or radio button, the button symbol points downwards with value 0 and upwards with value 1. 

When the "Disclosure button" style is selected, no options are available.

![](assets/en/FormObjects/radio_disclosure.png)

#### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - Expression Type - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - Radio Group - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

