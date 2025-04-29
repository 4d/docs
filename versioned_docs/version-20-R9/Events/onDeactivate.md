---
id: onDeactivate
title: On Deactivate
---

|Code|Can be called by|Definition|  
|---|---|---|
|12|Form|The form’s window ceases to be the frontmost window|


## Description

If the window of a form was the frontmost window, this event is called when the window is sent to the background.

This event applies to the form as a whole and not to a particular object. Consequently, if the `On Deactivate` form event property is selected, only the form will have its form method called.

### See also
[On Activate](onActivate.md)