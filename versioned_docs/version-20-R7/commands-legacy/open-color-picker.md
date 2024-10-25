---
id: open-color-picker
title: OPEN COLOR PICKER
slug: /commands/open-color-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN COLOR PICKER.Syntax-->**OPEN COLOR PICKER** {( *textOrBackground* )}<!-- END REF-->
<!--REF #_command_.OPEN COLOR PICKER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| textOrBackground | Integer | &#8594;  | 0 or omitted = text color, 1 = text background color |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OPEN COLOR PICKER.Summary-->The **OPEN COLOR PICKER** command displays the system color picker dialog box.<!-- END REF--> 

**Note:** This is a modal dialog box under Windows but not under OS X.

When the user selects a color and validates the dialog box, this color is applied to the current text selection in the object with the focus, if the "Allow Font/Color Picker" property is checked for this object (see the *Design Reference* manual).

If you pass 0 in the *textOrBackground* parameter or omit this parameter, the selected color is applied to the text. If you pass 1 in *textOrBackground*, this color is applied to the text background. 

If the color was changed, the On After Edit form event is generated for the object. 

#### See also 

[OPEN FONT PICKER](open-font-picker.md)  