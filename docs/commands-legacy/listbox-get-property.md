---
id: listbox-get-property
title: LISTBOX Get property
slug: /commands/listbox-get-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get property.Syntax-->**LISTBOX Get property** ( {* ;} *object* ; *property* ) : any<!-- END REF-->
<!--REF #_command_.LISTBOX Get property.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string). If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| property | Integer | &#8594;  | Property whose value you want to get |
| Function result | Longint, String | &#8592; | Current value |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get property.Summary-->The **LISTBOX Get property** command returns the value of the *property* of the list box or column specified using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section.

**Note:** If the list box or column specified using the *object* and *\** parameters does not exist, the **LISTBOX Get property** command returns -1 for numeric properties, or an empty string.

In the *property* parameter, pass a constant indicating the property whose value you want to get. You can use one of the following constants from the “*List Box*” theme:

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

\*These properties only apply to list box columns; if you pass a list box as parameter with one of these properties, **LISTBOX Get property** returns -1, or an empty string, depending on the *property* passed.

In general, to signal an invalid result **LISTBOX Get property** returns -1 when retrieving properties that have numeric values, or an empty string; however, no errors are generated. More specifically, this occurs in the following cases:

* If you pass a *property* that does not exist
* If you pass a *property* that is not available for the specified list box or column, e.g. you pass the lk font color expression property with an array type list box
* If you pass a column as parameter with a *property* that is applied to a list box, and vice versa if you pass a list box as parameter with a *property* that is applied to a column (see \* above)

In addition, it is not possible to return values from more than one column at a time; if you attempt to use the "@" symbol as part of a column name to indicate multiple columns with similar names, **LISTBOX Get property** returns the first matching value it finds; as a result, the value returned has no true significance.

**Notes:**

* The lk display footer and lk display header constants are useful for calculating the actual size of a list box area in a form.
* When you use the constants \_o\_lk hor scrollbar position or \_o\_lk ver scrollbar position, the **LISTBOX Get property** command returns the position of the scrolling cursor in relation to its original position, i.e. the size of the hidden part of the window, expressed in pixels. By default, this position corresponds to 0\. Combined, for example, with information concerning the row height, this value lets you find out the contents displayed in the listbox. However, these constants are deprecated and can be favorably replaced with the [OBJECT GET SCROLL POSITION](object-get-scroll-position.md) command.
* The statement **LISTBOX Get property**(vLB;\_o\_lk footer height) returns the same value as the [LISTBOX Get footers height](listbox-get-footers-height.md) command when footers are displayed. However, if footers are not displayed, **LISTBOX Get property** returns 0 while [LISTBOX Get footers height](listbox-get-footers-height.md) still returns the height, in this case theoretical, of the footers.

#### Example 1 

Given a listbox "MyListbox", if you execute the following statement:

```4d
 $Value:=LISTBOX Get property(*;"MyListbox";lk selection mode) // value returned indicates selection mode
```

In this case, the result returned indicates whether multiple rows can be selected.

#### Example 2 

Given a list box "MyListbox", if you execute the following statement:

```4d
 $resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)
```

**LISTBOX Get property** returns -1 because the lk column resizable property applies to columns and a list box was passed as parameter.

#### See also 

[LISTBOX SET GRID](listbox-set-grid.md)  
[LISTBOX SET PROPERTY](listbox-set-property.md)  
[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 917 |
| Thread safe | &cross; |


