---
id: listbox-set-footer-calculation
title: LISTBOX SET FOOTER CALCULATION
slug: /commands/listbox-set-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Syntax-->**LISTBOX SET FOOTER CALCULATION** ( {* ;} *object* ; *calculation* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| calculation | Integer | &#8594;  | Calculation for footer area |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Summary-->The **LISTBOX SET FOOTER CALCULATION** command sets the automatic calculation associated with the footer of the list box designated by the *object* and *\** parameters

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string).<!-- END REF--> If you do not pass this parameter, this indicates that the object is a variable. In this case, you pass a variable reference instead of a string.  
The *object* parameter can designate: 

* the variable or name of a footer area. In this case, the command applies to this area.
* the variable or name of a list box column. In this case, the command applies to the footer area of this column.
* the variable or name of a list box. In this case, the command applies to all the footer areas of the list box.

In the *calculation* parameter, pass one of the following constants, found in the *Listbox Footer Calculation* theme, in order to set the calculation to be performed:

| Constant                     | Type    | Value | Comment                                                                                                                                             |
| ---------------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Listbox footer std deviation | Integer | 7     | Used with number or time type columns (only for array type list boxes)<br/>Default type of the result: Real                                 |
| lk footer average            | Integer | 6     | Used with number or time type columns<br/>Default type of the result: Real                                                                  |
| lk footer count              | Integer | 5     | Used with number, text, date, time, Boolean or picture type columns<br/>Default type of the result: Longint                                 |
| lk footer custom             | Integer | 1     | No calculation performed by 4D. The footer variable must be calculated by programming.<br/>Default type of the result: Footer variable type |
| lk footer max                | Integer | 3     | Used with number, date, time or Boolean type columns<br/>Default type of the result: Column array or field type                             |
| lk footer min                | Integer | 2     | Used with number, date, time or Boolean type columns<br/>Default type of the result: Column array or field type                             |
| lk footer sum                | Integer | 4     | Used with number, time or Boolean type columns<br/>Default type of the result: Column array or field type                                   |
| lk footer sum squares        | Integer | 9     | Used with number or time type columns (only for array type list boxes)<br/>Default type of the result: Real                                 |
| lk footer variance           | Integer | 8     | Used with number or time type columns (only for array type list boxes)<br/>Default type of the result: Real                                 |

Note that predefined calculations take all the values of the column into account, including those of any hidden rows. If you want to restrict a calculation to only visible rows, you must use the lk footer custom constant and perform a customized calculation. 

If the data type of a column or of even one column of the list box (when object designate a whole list box) is not compatible with the *calculation* set, the footer is not modified and the error 18 is generated. If a column contains a formula (selection type list box), the error 10 is generated.

**Note:** Footer area variables are typed automatically (when there are not typed through the code) with regards to the calculation set in the Property List (see *List box footer specific properties*). If the variable data type does not correspond to the result expected by the **LISTBOX SET FOOTER CALCULATION** command, a typing error is generated. For example, for a column displaying dates, if the footer calculation is 'Maximum', the *footer* variable will be typed as Date. At this point, if you execute the statement **LISTBOX SET FOOTER CALCULATION**(footer;lk footer count), an error is generated because the expected data type of the result (longint) differs from the actual variable data type.

#### See also 

[LISTBOX Get footer calculation](listbox-get-footer-calculation.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1140 |
| Thread safe | &check; |
| Forbidden on the server ||


