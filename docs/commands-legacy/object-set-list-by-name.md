---
id: object-set-list-by-name
title: OBJECT SET LIST BY NAME
slug: /commands/object-set-list-by-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET LIST BY NAME.Syntax-->**OBJECT SET LIST BY NAME** ( {* ;} *object* {; *listType*}; *list* )<!-- END REF-->
<!--REF #_command_.OBJECT SET LIST BY NAME.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an Object Name (String) If omitted, object is a Field or a Variable |
| object | any | &#8594;  | Object Name (if * is specified), or Field or Variable (if * is omitted) |
| listType | Integer | &#8594;  | Type of list: Choice list, Required list or Excluded list |
| list | Text | &#8594;  | Name of the list to use as Choice list or "" to disassociate the list |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET LIST BY NAME.Summary-->The OBJECT SET LIST BY NAME command sets, replaces or disassociates the *list* associated with the object or group of objects specified by *object*.<!-- END REF--> The list whose name is passed in the *list* parameter must have been created using the List Editor in the Design environment.

This command can be applied in an input or dialog form, to fields and enterable variables whose value can be entered as text.

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional *\** parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string.

**Note:** This command cannot be used with fields located in a subform’s list form.

The **OBJECT SET LIST BY NAME** command now allows you to set or replace all the types of lists associated with the object(s) designated by the *object* and *\** parameters: choice lists, list of required values, and lists of excluded values. To do this, in the *listType* parameter you pass one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant      | Type    | Value | Comment                                                                                    |
| ------------- | ------- | ----- | ------------------------------------------------------------------------------------------ |
| Choice list   | Integer | 0     | Simple list of values to choose from ("Choice List" option in the Property List) (default) |
| Excluded list | Integer | 2     | Lists values not accepted for entry ("Excluded List" option in the Property List)          |
| Required list | Integer | 1     | Lists only values accepted for entry ("Required List" option in the Property List)         |

If you omit this parameter, value 0 (Choice list) is used by default. 

In the current process, to disassociate a list that was associated with the *object*, pass an empty string ("") in the *list* parameter for the type of list concerned.

Existing list of values are replaced depending on how the list is associated to the form object:

* using a choice list: the list itself is replaced.
* using an array: the list is copied in array elements.
* using an object (*not supported in binary databases*): the list is copied as collection elements in the *values* property of the object.

#### Example 1 

The following example sets a choice list for a shipping field. If the shipping is overnight, then the choice list is set to shippers who can ship overnight. Otherwise, it is set to the standard shippers:

```4d
 If([Shipments]Overnight)
    OBJECT SET LIST BY NAME([Shipments]Shipper;"Fast Shippers")
 Else
    OBJECT SET LIST BY NAME([Shipments]Shipper;"Normal Shippers")
 End if
```

#### Example 2 

Associate the "color\_choice" list as a simple pop-up/drop-down list named "DoorColor":

```4d
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"color_choice")
  // in this case, the 3rd parameter (constant) can be omitted
```

#### Example 3 

You want to associate the "color\_choice" list with the "WallColor" combo box. Since this combo box is enterable, you want for it not to be possible to use certain colors such as "black", "purple" etc. These colors are placed in the "excl\_colors" list:

```4d
 OBJECT SET LIST BY NAME(*;"WallColor";Choice list;"color_choice")
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"excl_colors")
```

#### Example 4 

You want to remove the list associations:

```4d
  // removal of a choice list
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"")
  // removal of list of values that are not allowed
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"")
```

#### See also 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 237 |
| Thread safe | &check; |
| Forbidden on the server ||


