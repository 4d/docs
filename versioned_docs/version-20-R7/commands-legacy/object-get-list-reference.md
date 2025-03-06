---
id: object-get-list-reference
title: OBJECT Get list reference
slug: /commands/object-get-list-reference
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list reference.Syntax-->**OBJECT Get list reference** ( {* ;} *object* {; *listType*} ) : ListRef<!-- END REF-->
<!--REF #_command_.OBJECT Get list reference.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| listType | Integer | &#8594;  | Type of list: Choice list, Required list or Excluded list |
| Function result | ListRef | &#8592; | List reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get list reference.Summary-->The **OBJECT Get list reference** command returns the reference number (ListRef) of the hierarchical list associated with the object or group of objects designated by *object* and *\**.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, this indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

By default, if you omit the *listType* parameter, the command returns the name of the choice list (list of values) associated with the object. You can also get the reference number for required lists or excluded lists by passing, in *listType*, one of the following constants found in the "*Form Objects (Properties)*" theme:

| Constant      | Type    | Value | Comment                                                                                    |
| ------------- | ------- | ----- | ------------------------------------------------------------------------------------------ |
| Choice list   | Integer | 0     | Simple list of values to choose from ("Choice List" option in the Property List) (default) |
| Excluded list | Integer | 2     | Lists values not accepted for entry ("Excluded List" option in the Property List)          |
| Required list | Integer | 1     | Lists only values accepted for entry ("Required List" option in the Property List)         |

If there is no hierarchical list associated with the object for the *listType* defined, the command returns 0\. 

#### See also 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1267 |
| Thread safe | &cross; |


