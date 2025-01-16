---
id: object-get-list-name
title: OBJECT Get list name
slug: /commands/object-get-list-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list name.Syntax-->**OBJECT Get list name** ( {* ;} *object* {; *listType*} ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get list name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| listType | Integer | &#8594;  | Type of list: Choice list, Required list or Excluded list |
| Function result | Text | &#8592; | Name of list (specified in Design mode) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get list name.Summary-->The OBJECT Get list name command returns the name of the choice list associated with the object or group of objects designated by *object*.<!-- END REF--> 4D lets you associate a choice list (created with the choice list editor in Design mode) with form objects using the form editor or the [OBJECT SET LIST BY NAME](object-set-list-by-name.md) command. 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string.

You can use the optional *listType* parameter to designate the type of list that you want to get. By default, if you omit this parameter, the command returns the name of the choice list (list of values) associated with the object. You can also get the names of required lists or excluded lists by passing, in *listType*, one of the following constants found in the "*Form Objects (Properties)*" theme:

| Constant      | Type    | Value | Comment                                                                                    |
| ------------- | ------- | ----- | ------------------------------------------------------------------------------------------ |
| Choice list   | Integer | 0     | Simple list of values to choose from ("Choice List" option in the Property List) (default) |
| Excluded list | Integer | 2     | Lists values not accepted for entry ("Excluded List" option in the Property List)          |
| Required list | Integer | 1     | Lists only values accepted for entry ("Required List" option in the Property List)         |

If there is no list of the type defined associated with the *object*, the command returns an empty string ("").

#### See also 

[OBJECT Get list reference](object-get-list-reference.md)  
[OBJECT SET LIST BY NAME](object-set-list-by-name.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1072 |
| Thread safe | &cross; |


