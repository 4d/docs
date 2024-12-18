---
id: new-shared-collection
title: New shared collection
displayed_sidebar: docs
---

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New shared collection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| value |Number, Text, Date, Time, Boolean, Shared object, Shared collection| &#8594;  | Shared collection's value(s) |
| Function result | Collection | &#8592; | New shared collection |

<!-- END REF-->

#### Description 

The `New shared collection` command <!-- REF #_command_.New shared collection.Summary --> creates a new empty or prefilled shared collection<!-- END REF --> and returns its reference. Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md). 

Adding an element to this collection using the assignment operator must be surrounded by the [`Use...End use`](../Concepts/shared.md#useend-use) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](../API/CollectionClass.md#push) or [`map()`](../API/CollectionClass.md#map) because they automatically trigger an internal *Use...End use*). Reading an element without a *Use...End use* structure is, however, possible.

:::info

For more information on shared collections, please refer to the [Shared objects and collections](../Concepts/shared.md) page.

:::

If you do not pass any parameters, `New shared collection` creates an empty shared collection and returns its reference.

You must assign the returned reference to a 4D variable of the Collection type.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new shared collection by passing one or several *value*(s) as parameter(s). Otherwise, you can add or modify elements subsequently through object notation assignment (see example).

If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

You can pass any number of values of the following supported types:

*	number (real, longint...). Number values are always stored as reals.
*	text
*	boolean
*	date
*	time (stored as number of milliseconds - real)
*	null
*	shared object
*	shared collection

:::note

Unlike standard (not shared) collections, shared collections do not support pictures, pointers, and objects or collections that are not shared.  

:::


#### Example

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```



#### See also 

[New collection](new-collection.md)  
[New shared object](../commands-legacy/new-shared-object.md)  
*Shared objects and shared collections*  

#### Properties

|  |  |
| --- | --- |
| Command number | 1527 |
| Thread safe | &check; |


