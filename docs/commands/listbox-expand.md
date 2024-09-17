---
id: listbox-expand
title: LISTBOX EXPAND
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX EXPAND.Syntax-->**LISTBOX EXPAND** ( {* ;} *object* {; *recursive* {; *selector* {; *line* {; *column*}}}} )<!-- END REF-->
<!--REF #_command_.LISTBOX EXPAND.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or 
Variable (if * is omitted) |
| recursive | Boolean | -> | True = expand sublevels
False = do not expand sublevels |
| selector | Longint | -> | Part of list box to expand |
| line | Longint | -> | Number of break row to expand or 
Number of list box level to expand |
| column | Longint | -> | Number of break column to expand |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX EXPAND.Summary-->The LISTBOX EXPAND command is used to expand the break rows of the list box object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. 

If the list box is not configured in hierarchical mode, the command does nothing. For more information about hierarchical list boxes, please refer to the [Hierarchical list boxes](/4Dv20R6/4D/20-R6/Hierarchical-list-boxes.300-7003329.en.html) section.

 The optional *recursive* parameter is used to configure the expanding of the hierarchical sublevels of the list box. Pass True or omit this parameter for the command to expand all the levels and all the sublevels. If you pass False, only the first level specified will be expanded. 

The optional *selector* parameter is used to specify the scope of the command. You can pass one of the following constants, found in the [List Box](/4Dv20R6/4D/20-R6/List-Box.302-6958504.en.html) theme, in this parameter:

| Constant     | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                 |
| ------------ | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk all       | Longint | 0     | The command affects all sub-levels (default value, used when parameter is omitted).                                                                                                                                                                                                                                                     |
| lk selection | Longint | 1     | The command affects selected sub-levels.                                                                                                                                                                                                                                                                                                |
| lk break row | Longint | 2     | The command affects the sub-level to which the "cell" designated by the *row* and *column* parameters belongs. Note that these parameters represent the row and column numbers in the list box in standard mode and not in its hierarchical representation. If the *row* and *column* parameters are omitted, the command does nothing. |
| lk level     | Longint | 3     | The command affects all the break rows corresponding to the *level* column. This parameter designates a column number in the list box in standard mode and not in its hierarchical representation. If the *level* parameter is omitted, the command does nothing.                                                                       |

The command does not select break rows. 

If the selection or list box does not contain a break row or if all the break rows are already expanded, the command does nothing.

#### Example 

This example illustrates different ways of using the command. Given the following arrays shown in a list box:

![](../assets/en/commands/pict175844.en.png)

```4d
  //Expand all the break rows and subrows of the list box
 LISTBOX EXPAND(*;"MyListbox")
```

![](../assets/en/commands/pict175849.en.png)

```4d
  //Expand the first level of break rows of the selection
 LISTBOX EXPAND(*;"MyListbox";False;lk selection)
  //If the "Belgium" row was selected
```

![](../assets/en/commands/pict175851.en.png)

```4d
  //Expand the Brittany break row with recursion
 LISTBOX EXPAND(*;"MyListbox";False;lk break row;1;2)
```

![](../assets/en/commands/pict175853.en.png)

```4d
  //Expand all the first columns (countries) without recursion
 LISTBOX EXPAND(*;"MyListbox";False;lk level;1)
```

![](../assets/en/commands/pict175855.en.png)

#### See also 

[LISTBOX COLLAPSE](listbox-collapse.md)  