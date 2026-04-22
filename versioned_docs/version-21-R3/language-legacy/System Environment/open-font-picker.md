---
id: open-font-picker
title: OPEN FONT PICKER
slug: /commands/open-font-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN FONT PICKER.Syntax-->**OPEN FONT PICKER**<!-- END REF-->
<!--REF #_command_.OPEN FONT PICKER.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.OPEN FONT PICKER.Summary-->The **OPEN FONT PICKER** command displays the system font picker dialog box.<!-- END REF-->

**Note:** This is a modal dialog box under Windows but not under macOS.

When the user selects a font and/or a style and validates the dialog box, the changes are applied to the current text selection in the object with the focus, if the "Allow Font/Color Picker" property is checked for this object (see the *Design Reference* manual). Otherwise, the command does nothing.

If the font was changed, the On After Edit form event is generated for the object . 

## Example 

In a form, you want to add a button to display the font picker in order to allow users to modify the font or style of a Text variable area. Make sure that:

* the Text variable has the "Allow font/color picker" property checked .
* the "Focusable" property for the button has been unchecked.

Here is the button code:

```4d
 Case of
    :(FORM Event.code=On Clicked)
       GOTO OBJECT(textVar) //gives the variable the focus
       OPEN FONT PICKER
 End case
```

## See also 

[OPEN COLOR PICKER](../commands/open-color-picker)  

## Properties

|  |  |
| --- | --- |
| Command number | 1303 |
| Thread safe | no |


