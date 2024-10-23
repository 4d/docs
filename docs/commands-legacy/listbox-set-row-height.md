---
id: listbox-set-row-height
title: LISTBOX SET ROW HEIGHT
slug: /commands/listbox-set-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW HEIGHT.Syntax-->**LISTBOX SET ROW HEIGHT** ( {* ;} *object* ; *row* ; *height* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW HEIGHT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| row | Integer | &#8594;  | List box row whose height you want to set |
| height | Integer | &#8594;  | Height of list box row |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX SET ROW HEIGHT.Summary-->The **LISTBOX SET ROW HEIGHT** command allows you to modify the height of the specified *row* in the list box object designated using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

If the specified *row* does not exist in the list box, the command does nothing.

The unit used for the specified *height* corresponds to the one defined globally for the list box rows, either in the Property list or by a prior call to the [LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md) command.

The **LISTBOX SET ROW HEIGHT** command modifies the row height array specified in the Property List, if any (for more information, please see the *Row Height Array* section in the *Design Reference* manual); otherwise, its creates a row height array dynamically. Using this command to set individual row heights produces the exact same visual result as associating a row height array using the Property List; however, filling a row height array with values is much faster than calling this command in a loop to set row heights one by one for the list box.

**Important note:** If the global [LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md) command is called subsequently with a different unit than the one previously defined, the default value set by this command will replace and reinitialize any row heights set using **LISTBOX SET ROW HEIGHT** (see example 2).

#### Example 1 

You want to change the height of a few rows in the following list box:

![](../assets/en/commands/pict3071133.en.png)

If you execute this code:

```4d
  //current unit is pixels
 LISTBOX SET ROW HEIGHT(*;"listboxname";3;40) //Kuwait
 LISTBOX SET ROW HEIGHT(*;"listboxname";7;14) //Serbia
```

... you get the following result:

![](../assets/en/commands/pict3071135.en.png)

#### Example 2 

You have set a default row height and then set several individual row height values using the **LISTBOX SET ROW HEIGHT** command:

```4d
 LISTBOX SET ROWS HEIGHT(*;"listboxname";25;lk pixels) // global height set in pixels
 
 LISTBOX SET ROW HEIGHT(*;"listboxname";1;30) // row 1: 30 pixels
 LISTBOX SET ROW HEIGHT(*;"listboxname";5;40) // row 5: 40 pixels
 LISTBOX SET ROW HEIGHT(*;"listboxname";11;50) // row 11: 50 pixels
```

Later, if the following code is executed…

```4d
 LISTBOX SET ROWS HEIGHT(*;"listboxname";18;lk pixels)
```

…then the global row height is set to 18 pixels; however, since the unit has not changed, rows 1, 5 and 11 will keep their specific height values, i.e., 30, 40 and 50 pixels as defined above by the **LISTBOX SET ROW HEIGHT** command.  
  
On the other hand, if the code below is executed subsequently…

```4d
 LISTBOX SET ROWS HEIGHT(*;"listboxname";2;lk lines)
```

…then rows 1, 5 and 11 are reset to the global default row height set by [LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md) (i.e., 2 lines) because the unit has changed from pixels to lines**.** Since there is no automatic conversion applied, changing units always results in row heights being reinitialized to the new default value defined.

#### See also 

  
[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  