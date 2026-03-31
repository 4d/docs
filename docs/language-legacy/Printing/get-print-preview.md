---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = Print preview, False = No print preview |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get print preview.Summary-->The **Get print preview** command returns True if the [SET PRINT PREVIEW](../commands/set-print-preview) command was called with the **True** value in the current process.<!-- END REF-->

Note that the user can modify this option before validating the dialog box. To get the final printing mode, you must use the [Is in print preview](../commands/is-in-print-preview) command. 

## See also 

[Is in print preview](../commands/is-in-print-preview)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Properties

|  |  |
| --- | --- |
| Command number | 1197 |
| Thread safe | no |


