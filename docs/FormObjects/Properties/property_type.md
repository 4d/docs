---
id: property_type
title: Property: Type
---

````MANDATORY SETTING````


This property designates the type of the form object (active or inactive). For more information about form objects, see the [Form editor](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-editor.300-4163727.en.html) page.

To draw an object type, select the corresponding button and then trace the object in the form. After creating an object, you can modify its type using the Property List. Hold down the Shift key as you draw to constrain the object to a regular shape. Lines are constrained to horizontal, 45°, or vertical, rectangles are constrained to squares, and ovals are constrained to circles.

When a button is selected, you can scroll through its variants using the **Shift+Selection** key shortcut. Help tips display the currently selected variant and the associated selection key of the object.

You can click twice on the button so that it remains selected even after you have traced an object in the form (continual selection). This function makes creating several successive objects of the same type easier. To cancel a continual selection, click on another object or tool.

<hr>

### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|---|
|type|string|<li>"text"<li> "rectangle"<li> "groupBox"<li> "tab"<li> "line"<li> "button"<li> "checkbox"<li> "radio"<li> "dropdown"<li> "combo"<li> "webArea"<li> "write"<li> "subform"<li> "plugin"<li> "splitter"<li> "buttonGrid"<li> "progress"<li> "ruler"<li> "spinner"<li> "stepper"<li> "list"<li> "pictureButton"<li>"picturePopup"<li> "listbox"<li> "input"<li> "view"|

<hr>

### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](../Buttons/button_overview.md#regular)|[Toolbar button](../Buttons/button_overview.md#toolbar)|[Bevel button](../Buttons/button_overview.md#bevel)|[Rounded Bevel button](../Buttons/button_overview.md#Rounded-bevel)|[OS X Gradient button](../Buttons/button_overview.md#os-x-gradient)|
||[OS X Textured button](../Buttons/button_overview.md#os-x-textured)|[Office XP button](../Buttons/button_overview.md#office-XP)|[Help button](../Buttons/button_overview.md#help)|[Circle button](../Buttons/button_overview.md#circle)|[Custom button](../Buttons/button_overview.md#custom)| 
