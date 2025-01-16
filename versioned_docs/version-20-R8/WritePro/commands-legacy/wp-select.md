---
id: wp-select
title: WP SELECT
slug: /WritePro/commands/wp-select
displayed_sidebar: docs
---

<!--REF #_command_.WP SELECT.Syntax-->**WP SELECT** ( {{* ;} *wpArea*;} {*targetObj*} {; *startRange* ; *endRange*} )<!-- END REF-->
<!--REF #_command_.WP SELECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable (document) |
| wpArea | Text, Object | &#8594;  | Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted) |
| targetObj | Object | &#8594;  | Range or element or 4D Write Pro document |
| startRange | Integer | &#8594;  | Starting offset of text range |
| endRange | Integer | &#8594;  | Ending offset of text range |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP SELECT.Summary-->The **WP SELECT** command creates a new selection in the 4D Write Pro *wpArea* area, based upon the *targetObj* or a new range defined by *startRange* and *endRange*.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that *wpArea* is a form object name (string). If you do not pass this parameter, you indicate that *wpArea* is a 4D Write Pro object variable or field. If no 4D Write Pro area is passed in the *wpArea* parameter, the command does nothing.

**Note**: This command can only be used if the *wpArea* is associated with a form object (*i.e.* it is displayed in the current form/page).

To define the selection, you can either pass an existing object in *targetObj*, or pass a pair of *startRange* / *endRange* boundaries.

The following syntaxes are supported:

* *WP SELECT({\* ;} wpArea ; targetObj)*  
where *targetObj* can be:  
   * a range, or  
   * an element (table / row / paragraph / anchored or inline picture / text box / body / header / footer / section / sub-section), or  
   * a 4D Write Pro document (only body element used).
* *WP SELECT({\* ;} wpArea ; startRange ; endRange)*
* *WP SELECT( targetObj {; startRange ; endRange} )*  
where *targetObj* can be:  
   * a range, or  
   * an element (table / row / paragraph / anchored or inline picture / body / header / footer / section / sub-section), or  
   * a 4D Write Pro document.  
where *startRange* and *endRange* are allowed only for the following elements: body / header / footer / section / sub-section.

In *startRange* and *endRange*, pass values corresponding to the position of the first and last characters to select in the area. You can pass wk start text in *startRange* to define the beginning of the area, and wk end text in *endRange* to define the end of the area. Keep in mind that a 4D Write Pro document not only contains visible text but also formatting tags that are included in the range.

#### Example 

The following code:

```4d
 $range:=WP Text range([SAMPLE]WP;wk start text;12)
 WP SELECT(*;"WParea";$range)
```

... will have the same result as:

```4d
 WP SELECT(*;"WParea";wk start text;12)
```

#### See also 

[WP Text range](wp-text-range.md)  