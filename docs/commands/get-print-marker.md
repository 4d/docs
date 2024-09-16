---
id: get-print-marker
title: Get print marker
displayed_sidebar: docs
---

<!--REF #_command_.Get print marker.Syntax-->**Get print marker** ( *markNum* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get print marker.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| markNum | Longint | -> | Marker number |
| Function result | Longint | <- | Position of the marker |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get print marker.Summary-->The **Get print marker** command enables you to get the current position of a marker during printing.<!-- END REF--> 

This command can be used in two contexts:

* During the On Header form event, in the context of [PRINT SELECTION](print-selection.md) and [PRINT RECORD](print-record.md) commands.
* During the On Printing Detail form event, in the context of the [Print form](print-form.md) command.

The coordinates are returned in pixels (1 pixel = 1/72 inch). 

Pass one of the constants of the [Form Area](/4Dv20R6/4D/20-R6/Form-Area.302-6958524.en.html) theme in the *markNum* parameter:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Form break0   | Longint | 300   |
| Form break1   | Longint | 301   |
| Form break2   | Longint | 302   |
| Form break3   | Longint | 303   |
| Form break4   | Longint | 304   |
| Form break5   | Longint | 305   |
| Form break6   | Longint | 306   |
| Form break7   | Longint | 307   |
| Form break8   | Longint | 308   |
| Form break9   | Longint | 309   |
| Form detail   | Longint | 0     |
| Form footer   | Longint | 100   |
| Form header   | Longint | 200   |
| Form header1  | Longint | 201   |
| Form header10 | Longint | 210   |
| Form header2  | Longint | 202   |
| Form header3  | Longint | 203   |
| Form header4  | Longint | 204   |
| Form header5  | Longint | 205   |
| Form header6  | Longint | 206   |
| Form header7  | Longint | 207   |
| Form header8  | Longint | 208   |
| Form header9  | Longint | 209   |

#### Example 

Refer to the example of the [SET PRINT MARKER](set-print-marker.md) command. 

#### See also 
[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  