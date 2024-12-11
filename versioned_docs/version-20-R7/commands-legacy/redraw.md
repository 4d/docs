---
id: redraw
title: REDRAW
slug: /commands/redraw
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW.Syntax-->**REDRAW** ( *object* )<!-- END REF-->
<!--REF #_command_.REDRAW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | any | &#8594;  | Table for which to redraw the subform, or Field for which to redraw the area, or Variable for which to redraw the area, or List box to be updated |

<!-- END REF-->

#### Description 

<!--REF #_command_.REDRAW.Summary-->When you use a method to change the value of a field displayed in a subform, you must execute REDRAW to ensure that the form is updated.<!-- END REF--> 

In the context of list boxes in selection mode, when the REDRAW statement is applied to a list box type object it refreshes the data that is displayed in the object. This statement must be called typically after data modification has occurred in the records of the selection. 

#### See also 

[SET TIMER](set-timer.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 174 |
| Thread safe | &check; |
| Forbidden on the server ||


