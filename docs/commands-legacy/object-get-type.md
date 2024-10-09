---
id: object-get-type
title: OBJECT Get type
slug: /commands/object-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get type.Syntax-->**OBJECT Get type** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &srarr; | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &srarr; | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Longint | &larr; | Type of object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get type.Summary-->The **OBJECT Get type** command returns the type of the object designated by the *object* and *\** parameters in the current form.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). This syntax is mandatory if you are processing static objects such as lines or rectangles.   
If you do not pass this parameter, it indicates that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. 

**Note:** If you apply this command to a set of objects, the type of the last object is returned. 

The value returned corresponds to one of the following constants, available in the "*Form Object Types*" theme: 

| Constant                            | Type    | Value |
| ----------------------------------- | ------- | ----- |
| Object type 3D button               | Longint | 16    |
| Object type 3D checkbox             | Longint | 26    |
| Object type 3D radio button         | Longint | 23    |
| Object type button grid             | Longint | 20    |
| Object type checkbox                | Longint | 25    |
| Object type combobox                | Longint | 11    |
| Object type dial                    | Longint | 28    |
| Object type group                   | Longint | 21    |
| Object type groupbox                | Longint | 30    |
| Object type hierarchical list       | Longint | 6     |
| Object type hierarchical popup menu | Longint | 13    |
| Object type highlight button        | Longint | 17    |
| Object type invisible button        | Longint | 18    |
| Object type line                    | Longint | 32    |
| Object type listbox                 | Longint | 7     |
| Object type listbox column          | Longint | 9     |
| Object type listbox footer          | Longint | 10    |
| Object type listbox header          | Longint | 8     |
| Object type matrix                  | Longint | 35    |
| Object type oval                    | Longint | 34    |
| Object type picture button          | Longint | 19    |
| Object type picture input           | Longint | 4     |
| Object type picture popup menu      | Longint | 14    |
| Object type picture radio button    | Longint | 24    |
| Object type plugin area             | Longint | 38    |
| Object type popup dropdown list     | Longint | 12    |
| Object type progress indicator      | Longint | 27    |
| Object type push button             | Longint | 15    |
| Object type radio button            | Longint | 22    |
| Object type radio button field      | Longint | 5     |
| Object type rectangle               | Longint | 31    |
| Object type rounded rectangle       | Longint | 33    |
| Object type ruler                   | Longint | 29    |
| Object type splitter                | Longint | 36    |
| Object type static picture          | Longint | 2     |
| Object type static text             | Longint | 1     |
| Object type subform                 | Longint | 39    |
| Object type tab control             | Longint | 37    |
| Object type text input              | Longint | 3     |
| Object type unknown                 | Longint | 0     |
| Object type view pro area           | Longint | 42    |
| Object type web area                | Longint | 40    |
| Object type write pro area          | Longint | 41    |

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

[FORM LOAD](form-load.md)  
[LISTBOX GET OBJECTS](listbox-get-objects.md)  