---
id: form-get-vertical-resizing
title: FORM GET VERTICAL RESIZING
slug: /commands-legacy/form-get-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET VERTICAL RESIZING.Syntax-->**FORM GET VERTICAL RESIZING** ( *resize* {; *minHeight* {; *maxHeight*}} )<!-- END REF-->
<!--REF #_command_.FORM GET VERTICAL RESIZING.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resize | Boolean | <&rarr; | True: Form can be resized vertically
False: Form cannot be resized vertically |
| minHeight | Longint | <&rarr; | Smallest form height allowed (pixels) |
| maxHeight | Longint | <&rarr; | Largest form height allowed (pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET VERTICAL RESIZING.Summary-->The FORM GET VERTICAL RESIZING command returns the vertical resizing properties of the current form in the *resize*, *minHeight* and *maxHeight* variables.<!-- END REF--> These properties may have been set for the form in the Form editor in Design mode or for the current process via the [FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md) command.

#### See also 

[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  