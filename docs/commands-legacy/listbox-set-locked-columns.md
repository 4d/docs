---
id: listbox-set-locked-columns
title: LISTBOX SET LOCKED COLUMNS
slug: /commands/listbox-set-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Syntax-->**LISTBOX SET LOCKED COLUMNS** ( {* ;} *object* ; *numColumns* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| numColumns | Integer | &#8594;  | Number of columns to lock |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Summary-->The **LISTBOX SET LOCKED COLUMNS** command locks *numColumns* columns (starting from the first on the left) in the list box designated by the *object* and *\** parameters.<!-- END REF-->

Locked columns are shown in the left part of the list box and do not scroll with the rest of the list box columns. For more information, refer to the *Design Reference* manual.

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

In *numColumns*, you can pass any value included between 1 and the total number of columns in the list box minus 1\. For a list box with X columns, if you pass a value > X-1 in *numColumns*, it will be reduced automatically to the value X-1.

To remove the column locking, pass 0 or a negative value in *numColumns*.

#### See also 

[LISTBOX Get locked columns](listbox-get-locked-columns.md)  
[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  