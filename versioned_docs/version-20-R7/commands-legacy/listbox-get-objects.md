---
id: listbox-get-objects
title: LISTBOX GET OBJECTS
slug: /commands/listbox-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET OBJECTS.Syntax-->**LISTBOX GET OBJECTS** ( {* ;} *object* ; *arrObjectNames* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET OBJECTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| arrObjectNames | Text array | &#8592; | Names of sub-objects comprising list box (headers, columns, footers) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX GET OBJECTS.Summary-->The **LISTBOX GET OBJECTS** command returns an array containing the names of each object making up the list box designated by the *object* and *\** parameters.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. 

In *arrObjectNames*, you pass a text array that is automatically filled in by the command. Object names are returned in their display order, with the following sequence: 

| nameCol1       |
| -------------- |
| headerNameCol1 |
| footerNameCol1 |
| nameCol2       |
| headerNameCol2 |
| footerNameCol2 |
| ...            |

The array returns the object names for all the columns (including column footers), regardless of whether or not they are visible. 

This command is useful in the context of the parsing of a form using the [FORM LOAD](form-load.md), [FORM GET OBJECTS](form-get-objects.md) and [OBJECT Get type](object-get-type.md) commands. You can use it, when needed, to obtain the names of list box sub-objects.

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
[OBJECT Get type](object-get-type.md)  