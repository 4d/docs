---
id: listbox-set-property
title: LISTBOX SET PROPERTY
slug: /commands/listbox-set-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET PROPERTY.Syntax-->**LISTBOX SET PROPERTY** ( {* ;} *object* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET PROPERTY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string). If omitted, object is a variable. |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| property | Integer | &#8594;  | List box or column property |
| value | Integer, Text | &#8594;  | Value of property |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX SET PROPERTY.Summary-->The **LISTBOX SET PROPERTY** command sets the *value* for the *property* of the list box or list box column specified using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string.

**Note:** If the list box or list box column specified using the *object* and *\** parameters does not exist, the command does nothing and no error is triggered.

In the *property* and *value* parameters, you indicate, respectively, the property to set and its new value. You can use the following constants found in the “*List Box*” theme:

| Constant                       | Value | Comment                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14    | **Wordwrap** property<br/>Applies to: Column\*<br/>Possible values:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                           |
| lk auto row height             | 31    | **Automatic row height** property for array type list box<br/>Applies to: List box or column<br/>Possible values: lk no (0) lk yes (1)                                                                                                                                                                                        |
| lk background color expression | 22    | **Background Color Expression** property for record selection, collection or entity selection type list boxes<br/>Applies to: List box or column                                                                                                                                                                                      |
| lk cell horizontal padding     | 36    | Cell horizontal padding in pixels (same value for left and right padding)<br/>Applies to: List box, column, header, footer                                                                                                                                                                                                            |
| lk cell vertical padding       | 37    | Cell vertical padding in pixels (same value for top and bottom padding)<br/>Applies to: List box, column, header, footer                                                                                                                                                                                                              |
| lk column max width            | 26    | **Maximum Width** property<br/>Applies to: Column\*                                                                                                                                                                                                                                                                                   |
| lk column min width            | 25    | **Minimum Width** property<br/>Applies to: Column\*                                                                                                                                                                                                                                                                                   |
| lk column resizable            | 15    | **Resizable** property<br/>Applies to: Column\*<br/>Possible values:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                          |
| lk detail form name            | 19    | **Detail Form Name** property for selection type list box<br/>Applies to: List box                                                                                                                                                                                                                                                    |
| lk display footer              | 8     | **Display Footers** property<br/>Applies to: List box<br/>Possible values:<br/>lk no (0): hiddenlk yes (1): shown                                                                                                                                                                                                     |
| lk display header              | 0     | **Display Headers** property<br/>Applies to: List box<br/>Possible values:<br/>lk no (0): hiddenlk yes (1): shown                                                                                                                                                                                                     |
| lk display type                | 21    | **Display Type** property for numeric columns<br/>Applies to: Column\*<br/>Possible values:**<br/>**lk numeric format (0): displays values in numeric formatlk three states checkbox (1): displays values as three-state checkboxes                                                                                   |
| lk double click on row         | 18    | **Double-click on row** property for selection type list box<br/>Applies to: List box<br/>Possible values:**<br/>**lk do nothing (0): does not trigger any automatic actionlk edit record (1): displays corresponding record in read-write modelk display record (2): displays corresponding record in read-only mode |
| lk extra rows                  | 13    | **Hide extra blank rows** property<br/>Applies to: List box<br/>Possible values:**<br/>**lk display (0)lk hide (1)                                                                                                                                                                                                    |
| lk font color expression       | 23    | **Font Color Expression** property for record selection, collection or entity selection type list boxes<br/>Applies to: List box or column                                                                                                                                                                                            |
| lk font style expression       | 24    | **Style Expression** property for record selection, collection or entity selection type list boxes<br/>Applies to: List box or column                                                                                                                                                                                                 |
| lk hide selection highlight    | 16    | **Hide selection highlight** property<br/>Applies to: List box<br/>Possible values:**<br/>**lk no (0)lk yes (1)                                                                                                                                                                                                       |
| lk highlight set               | 27    | **Highlight Set** property for selection type list box<br/>Applies to: List box                                                                                                                                                                                                                                                       |
| lk hor scrollbar height        | 3     | Height in pixels                                                                                                                                                                                                                                                                                                                              |
| lk meta expression             | 34    | **Meta Info Expression** property for collection or entity selection type list boxes<br/>Applies to: List box                                                                                                                                                                                                                         |
| lk movable rows                | 35    | **Movable Rows** property for array type list box <br/>Applies to: List box (excluding hierarchical mode) <br/>Possible values: lk no (0): Rows cannot be moved at runtime lk yes (1): Rows can be moved at runtime (default)                                                                                                 |
| lk multi style                 | 30    | **Multi-style** property <br/>Applies to: Column\*<br/>Possible values:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                       |
| lk named selection             | 28    | **Named Selection** property for selection type list box<br/>Applies to: List box                                                                                                                                                                                                                                                     |
| lk resizing mode               | 11    | **Column Auto-Resizing** property<br/>Applies to: List box<br/>Possible values:<br/>lk manual (0)lk automatic (2)                                                                                                                                                                                                     |
| lk row height unit             | 17    | Unit of **Row Height** property <br/>Applies to: List box<br/>Possible values:**<br/>**lk lines (1)<br/>lk pixels (0)<br/>                                                                                                                                                                            |
| lk selection mode              | 10    | **Selection Mode** property<br/>Applies to: List box<br/>Possible values: **<br/>**lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                                  |
| lk single click edit           | 29    | **Single-Click Edit** property<br/>Applies to: List box<br/>Possible values:<br/>lk no (0)lk yes (1)                                                                                                                                                                                                                  |
| lk sortable                    | 20    | **Sortable** property<br/>Applies to: List box<br/>Possible values:**<br/>**lk no (0)lk yes (1)                                                                                                                                                                                                                       |
| lk truncate                    | 12    | **Truncate with ellipsis** property<br/>Applies to: List box or column<br/>Possible values:**<br/>**lk without ellipsis (0)lk with ellipsis (1)                                                                                                                                                                       |
| lk ver scrollbar width         | 5     | Width in pixels                                                                                                                                                                                                                                                                                                                               |

\*These properties can only be applied to list box columns; however, if you pass a list box as parameter, **LISTBOX SET PROPERTY** applies the *property* to each column of the list box.

**Note:** If you pass a *property* that does not exist, or that is not available for the specified list box or column, for example lk font style expression in the case of an array type list box, the command does nothing and no error is triggered.

#### Example 1 

You want to make all columns of the "MyListbox" list box resizable:

```4d
 LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes) //All columns of the "MyListbox" list box are set as resizable
```

#### Example 2 

You want to set a maximum width for the column whose name is "ProductNumber":

```4d
 LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200) //This column will have a maximum width of 200
```

#### See also 

  
*List Box*  
[LISTBOX Get property](listbox-get-property.md)  