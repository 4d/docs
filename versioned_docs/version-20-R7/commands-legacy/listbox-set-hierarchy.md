---
id: listbox-set-hierarchy
title: LISTBOX SET HIERARCHY
slug: /commands/listbox-set-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HIERARCHY.Syntax-->**LISTBOX SET HIERARCHY** ( {* ;} *object* ; *hierarchical* {; *hierarchy*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HIERARCHY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable (if * is omitted) |
| hierarchical | Boolean | &#8594;  | True = hierarchical list box<br/>False = non-hierarchical list box |
| hierarchy | Pointer array | &#8594;  | Array of pointers |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX SET HIERARCHY.Summary-->The **LISTBOX SET HIERARCHY** command lets you configure the list box object designated by the *object* and *\** parameters in hierarchical or non-hierarchical mode.<!-- END REF--> 

**Note:** This command only functions with list boxes based on arrays. When this command is used with a list box based on selections, it does nothing.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. 

The Boolean *hierarchical* parameter lets you specify the list box mode:

* if you pass True, the list box is displayed in hierarchical mode,
* if you pass False, the list box is displayed in non-hierarchical mode (standard array mode).

When you pass a list box in hierarchical mode, certain properties are automatically restricted. For more information, please refer to the *Managing Hierarchical List Boxes* section. 

The *hierarchy* parameter is used to designate the arrays of the list box to be used to construct the hierarchy (see example). If you display the list box in hierarchical mode and omit this parameter:

* if the list box is already in hierarchical mode, the command does nothing.
* if the list box is in non-hierarchical mode and has never been declared hierarchical, the first array is used as the hierarchy by default.
* if the list box is in non-hierarchical mode but has previously been declared hierarchical, the last hierarchy is re-established.

#### Example 

Definition of the aCountry, aRegion and aCity arrays as the hierarchy of a list box:

```4d
 ARRAY POINTER($ArrHierarch;3)
 $ArrHierarch{1}:=->aCountry //First break level
 $ArrHierarch{2}:=->aRegion //Second break level
 $ArrHierarch{3}:=->aCity //Third break level
 LISTBOX SET HIERARCHY(*;"mylistbox";True;$ArrHierarch)
```

#### See also 

[LISTBOX GET HIERARCHY](listbox-get-hierarchy.md)  