---
id: object-set-data-source
title: OBJECT SET DATA SOURCE
slug: /commands/object-set-data-source
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DATA SOURCE.Syntax-->**OBJECT SET DATA SOURCE** ( {* ;} *object* ; *dataSource* )<!-- END REF-->
<!--REF #_command_.OBJECT SET DATA SOURCE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| dataSource | Pointer | &#8594;  | Pointer to new data source for object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET DATA SOURCE.Summary-->The **OBJECT SET DATA SOURCE** command modifies the data source of the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

The data source is the field or variable whose value is represented by the object when the form is executed. In Design mode, the data source is defined in the Property list, usually through the Source and Source Field (fields) or Variable Name (variables) row: 

![](../assets/en/commands/pict1208291.en.png)

Except for list boxes (see below), all data sources of the form can be modified by this command. It is up to the developer to ensure the consistency of the changes made. 

In the case of list boxes, the following points must be considered:

* Data source modifications must take the list box type into account: for example, it is not possible to use a field as the data source for a column in an array type list box.
* For selection type list boxes, it is not possible to modify or read the data source of the list box object itself: in this case, it is an internal reference and not a data source.
* This command is mainly used in the context of array type list boxes. For selection type list boxes, you can use the [LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md) command instead.

If this command is applied to a data source that is not modifiable, it does nothing. 

#### Example 

Modification of the data source for an entry area:

```4d
 var $ptrField : Pointer
 $ptrField:=Field(3;2)
 OBJECT SET DATA SOURCE(*;"Input";$ptrField)
```

#### See also 

[LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md)  
[OBJECT Get data source](object-get-data-source.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1264 |
| Thread safe | &check; |
| Forbidden on the server ||


