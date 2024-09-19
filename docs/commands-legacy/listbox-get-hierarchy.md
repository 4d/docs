---
id: listbox-get-hierarchy
title: LISTBOX GET HIERARCHY
slug: /commands-legacy/listbox-get-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET HIERARCHY.Syntax-->**LISTBOX GET HIERARCHY** ( {* ;} *object* ; *hierarchical* {; *hierarchy*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET HIERARCHY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | Form object | &#x1F852; | Object name (if * is specified) or <br/>Variable (if * is omitted) |
| hierarchical | Boolean | &#x1F858; | True = hierarchical list box<br/>False = non-hierarchical list box |
| hierarchy | Pointer array | &#x1F858; | Array of pointers |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET HIERARCHY.Summary-->The LISTBOX GET HIERARCHY command lets you find out the hierarchical properties of the list box object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. 

The Boolean *hierarchical* parameter indicates whether or not the list box is in hierarchical mode:

* if the parameter returns True, the list box is in hierarchical mode,
* if the parameter returns False, the list box is displayed in non-hierarchical mode (standard array mode).

If the list box is in hierarchical mode, the command fills the *hierarchy* array with pointers to the arrays of the list box used to set the hierarchy.

**Note:** If the list box is in non-hierarchical mode, the command returns, in the first element of the *hierarchy* array, a pointer to the array of the first column of the list box.

#### See also 

[LISTBOX SET HIERARCHY](listbox-set-hierarchy.md)  