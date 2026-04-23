---
id: form-get-horizontal-resizing
title: FORM GET HORIZONTAL RESIZING
slug: /commands/form-get-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Syntax-->**FORM GET HORIZONTAL RESIZING** ( *resize* : Boolean {; *minWidth* : Integer {; *maxWidth* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resize | Boolean | &#8592; | True: Form can be resized horizontally<br/>False: Form cannot be resized horizontally |
| minWidth | Integer | &#8592; | Smallest form width allowed (pixels) |
| maxWidth | Integer | &#8592; | Largest form width allowed (pixels) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Created|

</details>
</div>

## Description 

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Summary-->The FORM GET HORIZONTAL RESIZING command returns the horizontal resizing properties of the current form in the *resize*, *minWidth* and *maxWidth* variables.<!-- END REF--> These properties may have been set for the form in the Form editor in Design mode or for the current process via the [FORM SET HORIZONTAL RESIZING](../commands/form-set-horizontal-resizing) command.

## See also 

[FORM SET HORIZONTAL RESIZING](../commands/form-set-horizontal-resizing)  

## Properties

|  |  |
| --- | --- |
| Command number | 1077 |
| Thread safe | no |


