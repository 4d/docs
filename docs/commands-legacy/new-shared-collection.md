---
id: new-shared-collection
title: New shared collection
slug: /commands/new-shared-collection
displayed_sidebar: docs
---

<!--REF #_command_.New shared collection.Syntax-->**New shared collection** {( *value* {; *value2* ; ... ; *valueN*} )} -> Function result<!-- END REF-->
<!--REF #_command_.New shared collection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| value | &srarr; | Shared collection's value(s) |
| Function result | Collection | &larr; | New shared collection |

<!-- END REF-->

#### Description 

<!--REF #_command_.New shared collection.Summary-->The **New shared collection** command creates a new empty or prefilled shared collection and returns its reference.<!-- END REF--> Adding an element to this collection must be surrounded by the *Use...End use* structure, otherwise an error is generated. Reading an element without a structure is, however, possible. 

**Note:** For more information on *shared collections*, please refer to the *Shared objects and shared collections* page.

If you do not pass any parameters, **New shared collection** creates an empty shared collection and returns its reference. 

You must assign the returned reference to a 4D variable declared with the [C\_COLLECTION](c-collection.md) command.

**Note:** Keep in mind that [C\_COLLECTION](c-collection.md) declares a variable of the [Collection](# "Array of object property values") type, but does not create a collection. 

Optionally, you can prefill the new shared collection by passing one or several *value(s)* as parameter(s). Otherwise, you can add or modify elements subsequently through object notation assignment (see example). 

 If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value. 

 You can pass any number of values of the following supported types: 

* number (real, longint...). Number values are always stored as reals.
* text
* booelan
* date
* time (stored as number of milliseconds - real)
* null
* shared object(\*)
* shared collection(\*)

**Note:** Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared. 

 (\*)When a shared object or collection is added to a shared collection, they share the same *locking identifier*. For more information on this point, refer to the *About the locking identifier (how shared groups work)* section.

#### Example 

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### See also 

[New collection](new-collection.md)  
[New shared object](new-shared-object.md)  
*Shared objects and shared collections*  