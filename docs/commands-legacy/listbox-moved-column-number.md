---
id: listbox-moved-column-number
title: LISTBOX MOVED COLUMN NUMBER
slug: /commands/listbox-moved-column-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Syntax-->**LISTBOX MOVED COLUMN NUMBER** ( {* ;} *object* ; *oldPosition* ; *newPosition* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| oldPosition | Integer | &#8592; | Previous position of the moved column |
| newPosition | Integer | &#8592; | New position of the moved column |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Summary-->The **LISTBOX MOVED COLUMN NUMBER** command returns two numbers in *oldPosition* and *newPosition* indicating respectively the previous position and the new position of the column moved in the list box, specified by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

This command must be used with the form event On Column Moved (see the [Form event code](../commands/form-event-code.md) command). 

**Note:** This command takes invisible columns into account.

#### See also 

[Form event code](../commands/form-event-code.md)  
[LISTBOX MOVED ROW NUMBER](listbox-moved-row-number.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 844 |
| Thread safe | &check; |
| Forbidden on the server ||


