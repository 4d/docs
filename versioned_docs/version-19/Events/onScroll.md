---
id: onScroll
title: On Scroll
---

|Code|Can be called by|Definition|  
|---|---|---|
|59|[Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) - [List Box](FormObjects/listbox_overview.md)|The user scrolls the contents of a picture object or list box using the mouse or keyboard.|


## Description

This event can be generated in the context of a picture input or a list box.

This event is triggered after any other user event related to the scrolling action ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). The event is only generated in the object method (not in the form method). 

The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or [the keyboard](FormObjects/properties_Appearance.md#vertical-scroll-bar). It is not generated when the object is scrolled due to the execution of the `OBJECT SET SCROLL POSITION` command. 


### Picture input

The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the [display format](FormObjects/properties_Display.md#picture-format) is "Truncated (non Centered)". 


### List box

The event is generated as soon as a user scrolls the rows or columns of the list box. 
