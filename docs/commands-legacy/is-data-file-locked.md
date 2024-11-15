---
id: is-data-file-locked
title: Is data file locked
slug: /commands/is-data-file-locked
displayed_sidebar: docs
---

<!--REF #_command_.Is data file locked.Syntax-->**Is data file locked**  : Boolean<!-- END REF-->
<!--REF #_command_.Is data file locked.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = file/segment locked False = file/segment not locked |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is data file locked.Summary-->The Is data file locked command returns True if the data file of the open database or at least one of its segments is locked — i.<!-- END REF-->e. write protected. 

Placed, for instance, in the , this command enables the prevention of any risk of accidental opening of a locked data file. 

#### Example 

This method will prevent the opening of the database if the data file is locked: 

```4d
 If(Is data file locked)
    ALERT("The data file is locked. Impossible to open database.")
    QUIT 4D
 End if
```
