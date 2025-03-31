---
id: object-get-type
title: OBJECT Get type
slug: /commands/object-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get type.Syntax-->**OBJECT Get type** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Integer | &#8592; | Type of object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get type.Summary-->The **OBJECT Get type** command returns the type of the object designated by the *object* and *\** parameters in the current form.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). This syntax is mandatory if you are processing static objects such as lines or rectangles.   
If you do not pass this parameter, it indicates that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. 

**Note:** If you apply this command to a set of objects, the type of the last object is returned. 

The value returned corresponds to one of the following constants, available in the "*Form Object Types*" theme: 

| Constant                            | Type    | Value |
| ----------------------------------- | ------- | ----- |
| Object type 3D button               | Integer | 16    |
| Object type 3D checkbox             | Integer | 26    |
| Object type 3D radio button         | Integer | 23    |
| Object type button grid             | Integer | 20    |
| Object type checkbox                | Integer | 25    |
| Object type combobox                | Integer | 11    |
| Object type dial                    | Integer | 28    |
| Object type group                   | Integer | 21    |
| Object type groupbox                | Integer | 30    |
| Object type hierarchical list       | Integer | 6     |
| Object type hierarchical popup menu | Integer | 13    |
| Object type highlight button        | Integer | 17    |
| Object type invisible button        | Integer | 18    |
| Object type line                    | Integer | 32    |
| Object type listbox                 | Integer | 7     |
| Object type listbox column          | Integer | 9     |
| Object type listbox footer          | Integer | 10    |
| Object type listbox header          | Integer | 8     |
| Object type matrix                  | Integer | 35    |
| Object type oval                    | Integer | 34    |
| Object type picture button          | Integer | 19    |
| Object type picture input           | Integer | 4     |
| Object type picture popup menu      | Integer | 14    |
| Object type picture radio button    | Integer | 24    |
| Object type plugin area             | Integer | 38    |
| Object type popup dropdown list     | Integer | 12    |
| Object type progress indicator      | Integer | 27    |
| Object type push button             | Integer | 15    |
| Object type radio button            | Integer | 22    |
| Object type radio button field      | Integer | 5     |
| Object type rectangle               | Integer | 31    |
| Object type rounded rectangle       | Integer | 33    |
| Object type ruler                   | Integer | 29    |
| Object type splitter                | Integer | 36    |
| Object type static picture          | Integer | 2     |
| Object type static text             | Integer | 1     |
| Object type subform                 | Integer | 39    |
| Object type tab control             | Integer | 37    |
| Object type text input              | Integer | 3     |
| Object type unknown                 | Integer | 0     |
| Object type view pro area           | Integer | 42    |
| Object type web area                | Integer | 40    |
| Object type write pro area          | Integer | 41    |

#### Example 

You want to load a form and get a list of all the objects of list boxes that it contains.

```4d
 FORM LOAD("MyForm")
 ARRAY TEXT(arrObjects;0)
 FORM GET OBJECTS(arrObjects)
 ARRAY LONGINT(ar_type;Size of array(arrObjects))
 For($i;1;Size of array(arrObjects))
    ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})
    If(ar_type{$i}=Object type listbox)
       ARRAY TEXT(arrLBObjects;0)
       LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)
    End if
 End for
 FORM UNLOAD
```

#### See also 

[FORM LOAD](../commands/form-load.md)  
[LISTBOX GET OBJECTS](listbox-get-objects.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1300 |
| Thread safe | &cross; |


