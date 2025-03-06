---
id: listbox-sort-columns
title: LISTBOX SORT COLUMNS
slug: /commands/listbox-sort-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SORT COLUMNS.Syntax-->**LISTBOX SORT COLUMNS** ( {* ;} *object* ; *colNum* ; *order* {; *colNum2* ; *order2* ; ... ; *colNumN* ; *orderN*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SORT COLUMNS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| colNum | Integer | &#8594;  | Column number(s) to sort |
| order | * | &#8594;  | ">" to sort in ascending order or "<" to sort in descending order |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SORT COLUMNS.Summary-->The LISTBOX SORT COLUMNS command applies a standard sort to the rows of the list box defined by the *object* and *\** parameters on the basis of one or more column value(s).<!-- END REF-->

**Note:** A standard sort is applied on the basis of a single column value when the user clicks on the column header (see *Standard sorts*).

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section.

In *colNum*, pass the column number of the column whose values you want to use as the sort criteria. You can use any type of array data, except pictures and pointers.

In *order*, pass the symbol > or < to indicate the sort order. If *order* contains the “greater than” symbol (>), the sort order is ascending. If *order* contains the “less than” symbol (<), the sort oder is descending.

You can define multi-level sorts: to do so, pass as many pairs (*colNum;order*) as necessary. The sorting level is defined by the position of the parameter in the call.

In conformity with the principle of list box operation, the columns are synchronized which means that the sorting of a column is automatically passed on to all the other columns of the object.

**Note:** The **LISTBOX SORT COLUMNS** command does not take the *Sortable* listbox property into account.


#### Properties

|  |  |
| --- | --- |
| Command number | 916 |
| Thread safe | &cross; |


