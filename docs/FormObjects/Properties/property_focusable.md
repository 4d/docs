---
id: property_focusable
title: Property: Focusable
---


This property can be set in the “Entry” theme of the Property List for active objects (whether enterable or not) as well as for non-enterable fields.

When the **Focusable** property is selected for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected — except when the *Hide focus rectangle* option has also been selected.

* ![](../../assets/en/property_focusable1.png)<br>Check box shows focus when selected
<p>
<p>

* ![](../../assets/en/property_focusable2.png)<br>Check box is selected but cannot show focus|


When the **Focusable** property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.

#### Hide focus rectangle  
During execution, a field or any enterable object is outlined by a selection rectangle when it has the focus (via the **Tab** key or a single click). You can hide this rectangle by checking the **Hide focus rectangle** option. Hiding the focus rectangle may be useful in the case of specific interfaces.

<hr>

### JSON Grammar

|Name|Data Type|Possible Values|
|---|:---:|---|
|focusable|boolean | TRUE / FALSE|

<hr>

### Objects Supported

|Category|Link| | | | | 
|---|---|---|---|---|---|
|Button|[Regular button](../Buttons/button_overview.md#regular)|[Toolbar button](../Buttons/button_overview.md#toolbar)|[Bevel button](../Buttons/button_overview.md#bevel)|[Rounded Bevel button](../Buttons/button_overview.md#Rounded-bevel)|[OS X Gradient button](../Buttons/button_overview.md#os-x-gradient)|
||[OS X Textured button](../Buttons/button_overview.md#os-x-textured)|[Office XP button](../Buttons/button_overview.md#office-XP)|[Help button](../Buttons/button_overview.md#help)|[Circle button](../Buttons/button_overview.md#circle)|[Custom button](../Buttons/button_overview.md#custom)| 



