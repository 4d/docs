---
id: onMouseUp
title: On Mouse Up
---

|Code|Can be called by|Definition|  
|---|---|---|
|2|[Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type)|The user has just released the left mouse button in a Picture object|


## Description

The `On Mouse Up` event is generated when the user has just released the left mouse button while dragging in a picture input. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area.

When the `On Mouse Up` event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the `MouseX` and `MouseY` System variables. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0).

When using this event, you must also use the `Is waiting mouse up` command to handle cases where the "state manager" of the form is desynchronized, i.e. when the `On Mouse Up` event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the `On Mouse Up` event, please refer to the description of the `Is waiting mouse up` command.

> If the [Draggable](FormObjects/properties_Action.md#draggable) option is enabled for the picture object, the `On Mouse Up` event is never generated. 
