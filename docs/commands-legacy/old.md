---
id: old
title: Old
slug: /commands/old
displayed_sidebar: docs
---

<!--REF #_command_.Old.Syntax-->**Old** ( *aField* ) : any<!-- END REF-->
<!--REF #_command_.Old.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field for which to return old value |
| Function result | any | &#8592; | Original field value |

<!-- END REF-->

#### Description 

<!--REF #_command_.Old.Summary-->The **Old** command returns the value held in *aField* before the field was programmatically assigned a value or modified in data entry.<!-- END REF-->

Each time you change the current record for a table, 4D creates and maintains in memory a duplicated “image” of the new current record when it is loaded in memory. When modifying a record, you work with the actual image of the record, not this duplicated image. This image is then discarded when you change the current record again.

**Old** returns the value from the duplicated image. In other words, for an existing record, it returns the value of the field as it is stored on disk. If a record is new, **Old** returns the default empty value for *field* according to its type. For example, if *field* is an Alpha field, **Old** returns an empty string. If *field* is a numeric field, **Old** returns zero (0), and so on.

**Old** works on *aField* whether the field has been modified by a method or by the user during data entry. It can be applied to all field types.

To restore the original value of a field, assign it the value returned by **Old**.

**Note:** For technical reasons, in the case of Picture and BLOB type fields, the expression returned by **Old** cannot be used directly as a parameter for another command. It is necessary to pass the value via an intermediate variable. For example: 

```4d
  //Do NOT write (causes a syntax error):
 $size :=BLOB size(Old([theTable]theBlob)) //INCORRECT
 
  //Write:
 $oldBLOB:=Old([theTable]theBlob)
 $size :=BLOB size($oldBLOB) //CORRECT
```

#### See also 

[Modified](modified.md)  