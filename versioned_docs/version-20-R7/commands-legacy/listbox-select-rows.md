---
id: listbox-select-rows
title: LISTBOX SELECT ROWS
slug: /commands/listbox-select-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROWS.Syntax-->**LISTBOX SELECT ROWS** ( {* ;} *object* ; *selection* {; *action*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROWS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| selection | Object, Collection | &#8594;  | Object or collection describing the rows to select |
| action | Integer | &#8594;  | lk replace selection (default if omitted), lk add to selection, lk remove from selection |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SELECT ROWS.Summary-->The **LISTBOX SELECT ROWS** command selects the rows of an entity selection or collection list box that correspond to the entities or objects in the *selection* parameter.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section.

In the *selection* parameter, pass an [Object](# "Data structured as a native 4D object") or a [Collection](# "Array of object property values") depending on the list box type:

**Entity selection list box**

For an **entity selection list box**, pass an entity selection object containing entities of the same dataclass as the list box. If *selection* is an entity selection object from a different dataclass than the list box, an error is returned. 

**Collection list box**

For a **collection list box**, pass a subcollection of objects belonging to the list box. If your list box contains scalar values, pass a subcollection of values. 

**Notes:**

* If *selection* is not a valid entity selection object / collection, an error is returned.
* If *selection* is an empty entity selection / collection, by default (with "replace" action, see below) all the rows of the list box are deselected. For other actions, the command does nothing.
* If *selection* contains entities / elements that are not displayed in the list box, they are ignored.

The optional *action* parameter, if passed, is used to define the selection action to execute when a selection of rows already exists in the list box. You can pass a value or one of the following constants (located in the “*List Box*” theme):

| Constant                 | Type    | Value | Comment                                                                                                                                                                                                                                                       |
| ------------------------ | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Integer | 1     | The row selected is added to the existing selection. If the row specified already belongs to the existing selection, the command does nothing.                                                                                                                |
| lk remove from selection | Integer | 2     | The row selected is removed from the existing selection. If the row specified does not belong to the existing selection, the command does nothing.                                                                                                            |
| lk replace selection     | Integer | 0     | The row selected becomes the new selection and replaces the existing selection. The command has the same effect as a user click on a row (however, the On Clicked event is not generated). This is the default action (if the *action* parameter is omitted). |

By default, if the *action* parameter is omitted, the command replaces the row(s) defined by the *selection* parameter. 

**Note:** The command assumes that each object or entity is displayed only once in the list box. 

#### Example 1 

This code allows you to select invoices in an entity selection using only a single server request:

```4d
  //On the On Load event of the form we have: Form.invoices:=ds.Invoices.all()
  //The ListBox "Invoices" displays the entity selection Form.invoices
 
 var $cash : Object
 var $card : Object
 
  //Select invoices paid with cash
 $cash:=Form.invoices.query("paymentMethod=:1";"Cash")
 LISTBOX SELECT ROWS(*;"Invoices";$cash;lk replace selection)
```

#### Example 2 

Example with a collection of objects:

```4d
 var $name : Text
 $name:=Request("Enter a name")
 If(OK=1)
  // Form.studentsColl is a collection of objects
    $selection:=Form.studentsColl.query("lastname = :1";$name)
    LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk add selection)
 End if
```

#### See also 

[LISTBOX SELECT ROW](listbox-select-row.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1715 |
| Thread safe | &check; |
| Forbidden on the server ||


