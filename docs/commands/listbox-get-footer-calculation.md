---
id: listbox-get-footer-calculation
title: LISTBOX Get footer calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footer calculation.Syntax-->**LISTBOX Get footer calculation** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.LISTBOX Get footer calculation.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)If omitted, object is a variable |
| object | Form object | -> | Object Name (if * is specified) or Variable (if * is omitted) |
| Function result | Longint | <- | Type of calculation |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get footer calculation.Summary-->The **LISTBOX Get footer calculation** command returns the type of calculation associated with the footer area of the list box designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

The *object* parameter can designate:

* the variable or name of a footer area. In this case, the command returns the calculation associated with this area.
* the variable or name of a list box column. In this case, the command returns the calculation associated with footer area of this column.

You can compare the value returned with the constants of the [Listbox Footer Calculation](/4Dv20R6/4D/20-R6/Listbox-Footer-Calculation.302-6958456.en.html) theme (see the [LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md) command). 

#### See also 
[LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)  