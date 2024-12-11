---
id: listbox-set-auto-row-height
title: LISTBOX SET AUTO ROW HEIGHT
slug: /commands/listbox-set-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Syntax-->**LISTBOX SET AUTO ROW HEIGHT** ( {* ;} *object* ; *selector* ; *value* ; *unit* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string). If omitted, object is a variable. |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| selector | Integer | &#8594;  | Height value to set: lk row min height or lk row max height |
| value | Integer | &#8594;  | Minimum or maximum row height value |
| unit | Integer | &#8594;  | Unit of height value: 0 = pixels, 1 = lines |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Summary-->The **LISTBOX SET AUTO ROW HEIGHT** command allows you to set the minimum or maximum row height *value* in the list box object designated using the *object* and *\** parameters.<!-- END REF-->

**Note**: This command is taken into account only if the list box is set to automatic row height mode (see *Automatic Row Height*), which is only available for "collection or entity selection" and "array" list boxes. Otherwise, it has no effect.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section.

In *selector*, pass the type of value to set. You can use one of the following constants from the *List Box* theme:

| Constant          | Type    | Value |
| ----------------- | ------- | ----- |
| lk row max height | Integer | 33    |
| lk row min height | Integer | 32    |

In *value*, pass the corresponding value in the appropriate *unit*.

The *unit* parameter can be set using one of the following constants from the *List Box* theme:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Integer | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Integer | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** The command does not check the consistency of the values. However, at runtime, the minimum value will be applied to both values in case of conflict. For example, if the minimum value is 5 lines and the maximum value is 3 lines (which is inconsistent), the maximum height applied to the list box rows will be 5 lines.

#### Example 

You want to set the minimum and maximum heights for a list box with an automatic row height:

```4d
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels) // 60 pixels for min value
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels) //and 100 pixels for max value
```

#### See also 

[LISTBOX Get auto row height](listbox-get-auto-row-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1501 |
| Thread safe | &check; |
| Forbidden on the server ||


