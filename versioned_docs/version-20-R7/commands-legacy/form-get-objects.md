---
id: form-get-objects
title: FORM GET OBJECTS
slug: /commands/form-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET OBJECTS.Syntax-->**FORM GET OBJECTS** ( *objectsArray* {; *variablesArray* {; *pagesArray*}} {; formPageOption | *} )<!-- END REF-->
<!--REF #_command_.FORM GET OBJECTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectsArray | Text array | &#8592; | Name of form objects |
| variablesArray | Pointer array | &#8592; | Pointers to variables or fields associated with objects |
| pagesArray | Array integer | &#8592; | Page number of each object |
| formPageOption &#124; * | Longint, Operator | &#8594;  | 1=Form current page, 2=Form all pages, 4=Form inherited<br/>If * passed (obsolete) = current page with inherited objects |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET OBJECTS.Summary-->The FORM GET OBJECTS command returns the list of all objects present in the current form in the form of (an) array(s).<!-- END REF--> This list can be restricted to the current form page and can exclude objects of inherited forms. The command can be used with both input and output forms.

**Note:** The command does not include list box parts. To parse a form for the list box objects, [LISTBOX GET OBJECTS](listbox-get-objects.md) or [LISTBOX GET ARRAYS](listbox-get-arrays.md) should be used (see example below for a combination of [FORM GET OBJECTS](form-get-objects.md), [OBJECT Get type](object-get-type.md) and [LISTBOX GET OBJECTS](listbox-get-objects.md)).

If an array passed as a parameter is not previously declared, the command creates it and automatically sets its size. However, in the interest of compiling the application, we recommend that you explicitly declare each array. 

Pass the name of the string array that will contain object names (each object name is unique within a form) in *objectsArray*. The order in which objects appear in the array is not significant.

The other arrays optionally filled by the command are synchronized with the first array. 

Pass the name of the pointer array that already contains pointers to variables or fields associated with objects in the optional *variablesArray* parameter. If an object does not have an associated variable, the pointer [Is nil pointer](is-nil-pointer.md) is returned. If there is a “subform” type object, a pointer to the table of the subform is returned.

The third array (optional), *pagesArray*, is filled with the form page numbers. Each line of this array contains the page number of the corresponding object. 

The optional *\** parameter allows you to reduce the list of objects returned to the current page of the form. When this parameter is passed, only objects of the current page, page 0 and inherited pages are returned by the command. In other words, all the objects present in the current page of the form (visible or not) are processed by the command.

The optional *formPageOption* parameter allows you to specify the form part(s) from where you want to get objects. By default, if the *formPageOption* parameter is omitted (as well as the *\** parameter), objects from all pages, including inherited objects, are returned. To reduce the scope of the command, you can pass a value in *formPageOption*. You can pass one (or a combination) of the following constants, found in the "*Form Objects (Access)*" theme: 

| Constant          | Type    | Value | Comment                                                                                   |
| ----------------- | ------- | ----- | ----------------------------------------------------------------------------------------- |
| Form all pages    | Integer | 2     | Returns all objects of all the pages, excluding inherited objects                         |
| Form current page | Integer | 1     | Returns all objects of the current page, including page 0 but excluding inherited objects |
| Form inherited    | Integer | 4     | Returns inherited objects only                                                            |

**Compatibility note:** Passing the *\** parameter is equivalent to passing Form current page+Form inherited. The syntax using the *\** parameter is now deprecated and should no longer be used.

#### Example 1 

You want to get information on all pages including objects from the inherited form (if any):

```4d
  //open form
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray)
```

Or:

```4d
  //loaded form
 FORM LOAD([Table1];"MyForm")
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
```

#### Example 2 

You want to get information on the current page only, with page 0 of the loaded form and inherited form objects (if any):

```4d
 FORM LOAD("MyForm")
 FORM GOTO PAGE(2)
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form current page+Form inherited)
```

#### Example 3 

You want to get information on all objects in the inherited form (if any). If there is no inherited form, arrays will be returned empty.

```4d
 FORM LOAD("MyForm")
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form inherited)
```

#### Example 4 

You want to get information on page 4 objects, including page 0 objects, but without inherited form objects (if any):

```4d
 FORM LOAD([Table1];"MyForm")
 FORM GOTO PAGE(4)
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form current page)
```

#### Example 5 

You want to get information on objects on all pages, but without inherited form objects (if any):

```4d
 FORM LOAD([Table1];"MyForm")
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages)
```

#### Example 6 

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

[FORM GET PROPERTIES](form-get-properties.md)  
*Form Objects (Access)*  
*Objects (Forms)*  

#### Properties
|  |  |
| --- | --- |
| Command number | 898 |
| Thread safe | &check; |
| Forbidden on the server ||


