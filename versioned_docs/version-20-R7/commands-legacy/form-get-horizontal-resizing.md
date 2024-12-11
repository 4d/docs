---
id: form-get-horizontal-resizing
title: FORM GET HORIZONTAL RESIZING
slug: /commands/form-get-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Syntax-->**FORM GET HORIZONTAL RESIZING** ( *resize* {; *minWidth* {; *maxWidth*}} )<!-- END REF-->
<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resize | Boolean | &#8592; | True: Form can be resized horizontally<br/>False: Form cannot be resized horizontally |
| minWidth | Integer | &#8592; | Smallest form width allowed (pixels) |
| maxWidth | Integer | &#8592; | Largest form width allowed (pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Summary-->The FORM GET HORIZONTAL RESIZING command returns the horizontal resizing properties of the current form in the *resize*, *minWidth* and *maxWidth* variables.<!-- END REF--> These properties may have been set for the form in the Form editor in Design mode or for the current process via the [FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md) command.

#### See also 

[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1077 |
| Thread safe | &check; |
| Forbidden on the server ||


