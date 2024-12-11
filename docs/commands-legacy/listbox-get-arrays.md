---
id: listbox-get-arrays
title: LISTBOX GET ARRAYS
slug: /commands/listbox-get-arrays
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET ARRAYS.Syntax-->**LISTBOX GET ARRAYS** ( {* ;} *object* ; *arrColNames* ; *arrHeaderNames* ; *arrColVars* ; *arrHeaderVars* ; *arrColsVisible* ; *arrStyles* {; *arrFooterNames* ; *arrFooterVars*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET ARRAYS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| arrColNames | Text array | &#8592; | Column object names |
| arrHeaderNames | Text array | &#8592; | Header object names |
| arrColVars | Pointer array | &#8592; | Pointers to column variables or Pointers to column fields or Nil |
| arrHeaderVars | Pointer array | &#8592; | Pointers to header variables |
| arrColsVisible | Boolean array | &#8592; | Visibility of each column |
| arrStyles | Pointer array | &#8592; | Pointers to arrays, or style, color and row control variables, or Nil |
| arrFooterNames | Text array | &#8592; | Column footer object names |
| arrFooterVars | Pointer array | &#8592; | Pointers to column footer variables |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX GET ARRAYS.Summary-->The **LISTBOX GET ARRAYS** command returns a set of synchronized arrays providing information on each column (visible or invisible) in the list box set in the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Once the command is executed: 

* The *arrColNames* array contains the list of object names for each column in the list box.
* The *arrHeaderNames* array contains the list of object names for each column header in the list box.
* The *arrColVars* array contains, for an array type list box, pointers toward variables (arrays) associated with each column of the list box. For a selection type list box, *arrColVars* contains:  
   * For a column associated with a field, a pointer to the associated field,  
   * For a column associated with a variable, a pointer to the variable,  
   * For a column associated with an expression, a Nil pointer.
* The *arrHeaderVars* array contains pointers toward variables associated with each column header of the list box.
* The *arrColsVisible* array contains a Boolean value for each column, indicating whether the column is visible ([True](true.md "True")) or hidden ([False](false.md "False")) in the list box.
* The *arrStyles* array contains, for an array type list box, four pointers to four arrays that allow the applying of a specific style, font color, background color and custom display control to each row of the list box. These arrays are associated with the list box in the Property List of the Design environment or using the [LISTBOX SET ARRAY](listbox-set-array.md) command. If an array is not specified for the list box, the corresponding item in *arrStyles* will contain a Nil pointer.  
The fourth pointer corresponds either to a Boolean array (Hidden Rows Array), or to a longint array (array used to set hidden, disabled and non-selectable rows) based on the implementation used for the row control array (see *List box specific properties*).  
For record selection, collection or entity selection type list boxes, *arrStyles* contains:  
   * For each configuration set via a variable, a pointer to the variable,  
   * For each configuration set via an expression, a Nil pointer.

#### See also 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 832 |
| Thread safe | &check; |
| Forbidden on the server ||


