---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = Print preview, False = No print preview |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get print preview.Summary-->The **Get print preview** command returns True if the [SET PRINT PREVIEW](set-print-preview.md) command was called with the **True** value in the current process.<!-- END REF-->

Note that the user can modify this option before validating the dialog box. To get the final printing mode, you must use the [Is in print preview](is-in-print-preview.md) command. 

#### See also 

[Is in print preview](is-in-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1197 |
| Thread safe | &cross; |


