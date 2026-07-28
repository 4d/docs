---
id: get-print-marker
title: Get print marker
slug: /commands/get-print-marker
displayed_sidebar: docs
---

<!--REF #_command_.Get print marker.Syntax-->**Get print marker** ( *markNum* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Get print marker.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| markNum | Integer | &#8594;  | Marker number |
| Function result | Integer | &#8592; | Position of the marker |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2003|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get print marker.Summary-->The **Get print marker** command enables you to get the current position of a marker during printing.<!-- END REF--> 

This command can be used in two contexts:

* During the On Header form event, in the context of [PRINT SELECTION](../commands/print-selection) and [PRINT RECORD](../commands/print-record) commands.
* During the On Printing Detail form event, in the context of the [Print form](../commands/print-form) command.

The coordinates are returned in pixels (1 pixel = 1/72 inch). 

Pass one of the constants of the *Form Area* theme in the *markNum* parameter:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Form break0   | Integer | 300   |
| Form break1   | Integer | 301   |
| Form break2   | Integer | 302   |
| Form break3   | Integer | 303   |
| Form break4   | Integer | 304   |
| Form break5   | Integer | 305   |
| Form break6   | Integer | 306   |
| Form break7   | Integer | 307   |
| Form break8   | Integer | 308   |
| Form break9   | Integer | 309   |
| Form detail   | Integer | 0     |
| Form footer   | Integer | 100   |
| Form header   | Integer | 200   |
| Form header1  | Integer | 201   |
| Form header10 | Integer | 210   |
| Form header2  | Integer | 202   |
| Form header3  | Integer | 203   |
| Form header4  | Integer | 204   |
| Form header5  | Integer | 205   |
| Form header6  | Integer | 206   |
| Form header7  | Integer | 207   |
| Form header8  | Integer | 208   |
| Form header9  | Integer | 209   |

## Example 

Refer to the example of the [SET PRINT MARKER](../commands/set-print-marker) command. 

## See also 

[OBJECT MOVE](../commands/object-move)  
[SET PRINT MARKER](../commands/set-print-marker)  

## Properties

|  |  |
| --- | --- |
| Command number | 708 |
| Thread safe | no |



