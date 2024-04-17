---
id: onActivate
title: On Activate
---

|Code|Can be called by|Definition|  
|---|---|---|
|11|Form|The form's window becomes the frontmost window or the subform's container gets the focus|


## Description

If the window of a form was sent to the background, this event is called when the window becomes the frontmost window.

This event applies to the form as a whole and not to a particular object. Consequently, if the `On Activate` form event property is selected, only the form will have its form method called.

In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the [focusable](FormObjects/properties_Entry.md#focusable) property). 