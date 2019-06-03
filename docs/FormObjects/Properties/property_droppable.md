---
id: property_droppable
title: Property: Droppable
---
### Description

These properties control whether the user can drag the object and whether the object itself can receive data that the user drags onto it. 

If you want to enable drag and/or drop for a particular object, you need to enable the corresponding property. In this case, any drag or drop operation performed on the object when the form is executed triggers its corresponding form event. You then must manage the drag-and-drop action using a method. For more information, refer to Drag and Drop in the 4D Language Reference manual.

**Note:** The Droppable property can be assigned to non-enterable objects. This way the develop can program the desired response to an object being dropped on a non-enterable field or variable.



### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|dragging|text | "none", "custom", "automatic" (excluding list, list box)|
|dropping|text | "none", "custom", "automatic" (excluding list, list box)|



### Objects Supported

|Type|Title|
|---|---|
|Button|[Regular](../Buttons/button_overview.md#regular) <br>
|Button|[Toolbar](../Buttons/button_overview.md#toolbar)<br>
|Button|[Bevel](../Buttons/button_overview.md#bevel)<br>
|Button|[Rounded Bevel](../Buttons/button_overview.md#Rounded-bevel)<br> 
|Button|[OS X Gradient](../Buttons/button_overview.md#os-x-gradient)<br> 
|Button|[OS X Textured](../Buttons/button_overview.md#os-x-textured)<br> 
|Button|[Office XP](../Buttons/button_overview.md#office-XP)<br> 
|Button|[Help](../Buttons/button_overview.md#help)<br> 
|Button|[Circle](../Buttons/button_overview.md#circle)<br> 
|Button|[Custom](../Buttons/button_overview.md#custom)<br> 



