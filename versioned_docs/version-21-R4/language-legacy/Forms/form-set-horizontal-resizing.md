---
id: form-set-horizontal-resizing
title: FORM SET HORIZONTAL RESIZING
slug: /commands/form-set-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Syntax-->**FORM SET HORIZONTAL RESIZING** ( *resize* : Boolean {; *minWidth* : Integer {; *maxWidth* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resize | Boolean | &#8594;  | True: The form can be resized horizontally False: The form cannot be resized horizontally |
| minWidth | Integer | &#8594;  | Smallest form width allowed (pixels) |
| maxWidth | Integer | &#8594;  | Largest form width allowed (pixels) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Renamed|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Summary-->The FORM SET HORIZONTAL RESIZING command allows you to change the horizontal resizing properties of the current form through programming.<!-- END REF--> By default, these properties are set in the Design environment Form editor. New properties are set for the current process; they are not stored with the form. 

The *resize* parameter lets you set whether the form can be resized horizontally; in other words, if the width can be changed (manually by the user or through programming). 

If you pass **True**, the form width can be modified by the user; 4D uses values passed in *minWidth* and *maxWidth* as markers.

If you pass **False**, the current form width cannot be changed; in this case, there is no need to pass values in the *minWidth* and *maxWidth* parameters. 

If you passed **True** in the first parameter, you can pass new minimum and maximum widths (in pixels) in the optional *minWidth* and *maxWidth* parameters. If you leave these parameters out, the values set in the Design environment (if any) are used.

## Example 

Refer to the example of the [FORM SET SIZE](../commands/form-set-size) command. 

## See also 

[FORM GET HORIZONTAL RESIZING](../commands/form-get-horizontal-resizing)  
[FORM SET SIZE](../commands/form-set-size)  
[FORM SET VERTICAL RESIZING](../commands/form-set-vertical-resizing)  

## Properties

|  |  |
| --- | --- |
| Command number | 892 |
| Thread safe | no |


