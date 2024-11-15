---
id: listbox-get-auto-row-height
title: LISTBOX Get auto row height
slug: /commands/listbox-get-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get auto row height.Syntax-->**LISTBOX Get auto row height** ( {* ;} *object* ; *selector* {; *unit*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get auto row height.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string). If omitted, object is a variable. |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| selector | Integer | &#8594;  | Height value to get: lk row min height or lk row max height |
| unit | Integer | &#8594;  | Unit of height value: 0 = pixels, 1 = lines |
| Function result | Integer | &#8592; | Selected row height value |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX Get auto row height.Summary-->The **LISTBOX Get auto row height** command returns the current minimum or maximum row height value set for the list box object designated using the *object* and *\** parameters.<!-- END REF-->

The current minimum or maximum row height value can be set either in the Property list (see *Automatic Row Height*) or in the current process using the [LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md) command.

**Note**: This command can be used with "collection or entity selection" and "array" list boxes only.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section.

In *selector*, pass the type of value to get. You can use one of the following constants from the *List Box* theme:

| Constant          | Type    | Value |
| ----------------- | ------- | ----- |
| lk row max height | Integer | 33    |
| lk row min height | Integer | 32    |

By default, the command returns the value in pixels. You can pass one of the following constants from the *List Box* theme in the *unit* parameter to define the unit to use:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Integer | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Integer | 0     | Height is expressed as a number of pixels (default).                                                |

#### Example 

You want to get the maximum number of lines for a list box row:

```4d
 var vhMaxInteger
 vhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)
```

#### See also 

[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  