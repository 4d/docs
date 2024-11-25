---
id: listbox-get-print-information
title: LISTBOX GET PRINT INFORMATION
slug: /commands/listbox-get-print-information
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Syntax-->**LISTBOX GET PRINT INFORMATION** ( {* ;} *object* ; *selector* ; *info* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable (if * is omitted) |
| selector | Integer | &#8594;  | Information to get |
| info | Integer | &#8592; | Current value |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Summary-->The **LISTBOX GET PRINT INFORMATION** command returns the current information relative to the printing of the list box object designated by the *object* and *\** parameters.<!-- END REF--> This command can be used to control the printing of the list box contents.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. 

This command must be called in the context of the printing of a list box via the [Print object](print-object.md) command. Outside of this context, it will not return significant values.

Pass a value indicating the information you want to find out in *selector* and a variable of the number or BLOB type in *info*. In *selector*, you can pass one of the following constants, found in the "*List Box*" theme:

| Constant                   | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk last printed row number | Integer | 0     | Returns in *info* the number of the last row printed. Lets you find out the number of the next row to be printed. <br/>The number returned may be greater than the number of rows actually printed if the list box contains invisible rows or if the [OBJECT SET SCROLL POSITION](object-set-scroll-position.md) command has been called. For example, if rows 1, 18 and 20 have been printed, *info* is 20\. |
| lk printed height          | Integer | 3     | Returns in *info* the height in pixels of the object actually printed (including headers, lines, etc.). Remember that if the number of rows to print is less than the "capacity" of the list box, its height is automatically reduced.                                                                                                                                                                                |
| lk printed rows            | Integer | 1     | Returns in *info* the number of rows actually printed during the last call to the [Print object](print-object.md) command. This number includes any break rows added in the case of a hierarchical list box. For example, *info* is 10 if the list box contains 20 rows and the odd-numbered rows were hidden.                                                                                                        |
| lk printing is over        | Integer | 2     | Returns in *info* a Boolean indicating whether the last (visible) row of the list box has actually been printed. True = row has been printed; Otherwise, False.                                                                                                                                                                                                                                                       |

For more information about the principles of printing list boxes, please refer to *Printing list boxes*.

#### Example 1 

Printing until all the rows have been printed:

```4d
 OPEN PRINTING JOB
 FORM LOAD("SalesForm")
 
 $Over:=False
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printing is over;$Over)
    PAGE BREAK
 Until($Over)
 
 CLOSE PRINTING JOB
```

#### Example 2 

Printing at least 500 rows of the list box, knowing that certain rows are hidden:

```4d
 $GlobalPrinted:=0
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printed rows;$Printed)
    $GlobalPrinted:=$GlobalPrinted+$Printed
    PAGE BREAK
 Until($GlobalPrinted>=500)
```
