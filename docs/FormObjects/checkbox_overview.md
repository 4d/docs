---
id: checkboxOverview
title: Check Box
---
## Overview

A check box is used to enter or display binary (true-false) data. It is a type of button. A check box is either selected or deselected. Its effect is controlled by a method. Like all buttons, a check box is set to 0 when the form is first opened. The method associated with a check box executes when the check box is selected.

A check box displays text next to a small square. This text is set in the Title area of the “Objects” theme in the Property List. You can enter a title in the form of an XLIFF reference in this area (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)). 


## Using check boxes

When the user clicks the object, the box is checked. When a check box is checked, it has the value 1. When it is not checked, it has the value 0. 

You can also associate a Boolean type variable with the check box. In this case, the variable is True when the box is checked and False when it is not checked.

Any or all check boxes in a form can be checked or unchecked. 

![](assets/en/FormObjects/checkbox.png)

A group of check boxes allows the user to select several options. 

Unlike a Boolean field that is formatted as a check box, the values of the check box variable are not stored automatically. You use a method to manage the variable.

>3D check boxes have the same behavior as check boxes but their appearance (for example, the depiction of the checked/unchecked state) is set by the properties of the 3D button family. For more information, refer to 3D Buttons, 3D Check Boxes and 3D Radio Buttons.


## Three-States check box 

Check box objects accept a third state. This third state is an intermediate status, which is generally used for display purposes. It allows, for example, indicating that a property is present in a selection of objects, but not in each object of the selection. 



In order for a check box to take control of this third state, you must set the Three-States property in the “Display” theme of the Property List: 



This property is only available for standard check boxes associated with numeric variables — 3D check boxes and check boxes for Boolean fields cannot use the Three-States property (a Boolean field cannot be in an intermediary state). 

The variable associated with the check box returns the value 2 when the check box is in the third state. 

>In entry mode, the Three-States check boxes display each state sequentially, in the following order: unchecked / checked / intermediary / unchecked, etc. The intermediary state is generally not very useful in entry mode; in the code, simply force the value of the variable to 0 when it takes the value of 2 in order to pass directly from the checked state to the unchecked state.


## Using a standard action

You can assign a standard action to a check box or a 3D check box (using the OBJECT SET ACTION command or the "Action" theme of the Property List) to handle attributes of text areas. For example, if you select the "fontBold" standard action, at runtime the check box will manage the "bold" attribute of the selected text in the current area. 

>The three-state option is supported with check boxes only, not with 3D check boxes.

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
|spell/autoLanguageEnabled	Mac only|
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


#### Supported Properties
[Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Number of States](properties_TextAndPicture.md#number-of-states) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 