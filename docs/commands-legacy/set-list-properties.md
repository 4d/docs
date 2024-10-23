---
id: set-list-properties
title: SET LIST PROPERTIES
slug: /commands/set-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST PROPERTIES.Syntax-->**SET LIST PROPERTIES** ( *list* ; *appearance* {; *icon* {; *lineHeight* {; *doubleClick* {; *multiSelections* {; *editable*}}}}} )<!-- END REF-->
<!--REF #_command_.SET LIST PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | List reference number |
| appearance | Integer | &#8594;  | *** Deprecated, must always be 0 *** |
| icon | Integer | &#8594;  | *** Deprecated, must always be 0 *** |
| lineHeight | Integer | &#8594;  | Minimal line height expressed in pixels |
| doubleClick | Integer | &#8594;  | Expand/Collapse sublist on double-click 0 = Yes, 1= No |
| multiSelections | Integer | &#8594;  | Multiple selections: 0 = No (default), 1 = Yes |
| editable | Integer | &#8594;  | 0 = List is not editable by user, 1 = List is editable by user (default) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET LIST PROPERTIES.Summary-->The **SET LIST PROPERTIES** command sets the line height and selection properties of the hierarchical list whose list reference you pass in *list*.<!-- END REF-->

**Compatibility note:** *appearance* and *icon* parameters are deprecated, you must pass 0 for them. 

**Note:** If you want to customize the icon of each item in the list, use the command [SET LIST ITEM PROPERTIES](set-list-item-properties.md).

If you do not pass the parameter *lineHeight*, the line height of a hierarchical list is determined by the font and font size used for the object. You can also pass in the parameter *lineHeight* the minimal line height of the hierarchical list. If the value you pass is greater than the line height derived from the font and font size used, the line height of the hierarchical list will be forced to the value you pass. Pass 0 to set the default height.

The optional parameter *doubleClick* allows you to define that a double-click on a parent list item will not provoke the sublist to expand or to collapse. By default, a double-click on a parent list item provokes its child list to expand or to collapse. However, some user interfaces may need to deactivate this behavior. To do this, the *doubleClick* parameter should be set to 1.  
Only double-click will be deactivated. Users will still be able to expand or collapse sublists by clicking on the list node.  
If you omit the *doubleClick* parameter or pass 0, default behavior will be applied. 

The optional *multiSelections* parameter lets you indicate whether the list must accept multiple selections.   
By default, as in previous versions of 4D, you cannot simultaneously select several items of a hierarchical list. If you would like this function to be available for the list, pass the value 1 in the *multiSelections* parameter. In that case, multiple selections can be used:

* manually, using the **Shift**+**click** key combination for a continuous selection or **Ctrl**+**click** (Windows) / **Command**+**click** (Mac OS) for a discontinuous selection,
* by programming, using the [SELECT LIST ITEMS BY POSITION](select-list-items-by-position.md) and [SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md) commands.  
If you pass 0 or omit the *multiSelections* parameter, the default behavior will be applied.

The optional *editable* parameter lets you indicate whether the list must be editable by the user when it is displayed as a choice list associated with a field or a variable during data entry. When the list is editable, a **Modify** button is added in the choice list window and the user can add, delete and sort the values through a specific editor.   
If you pass 1 or omit the *editable* parameter, the list will be editable; if you pass 0, it will not be editable.

#### Example 

You want to disallow the expand/collapse sublist on double-click. You can write in the form method: 

```4d
 Case of
    :(FORM Event=On Load)
       hlCities:=Load list("Cities") //load the Cities choice list in the hlCities form object
       SET LIST PROPERTIES(hlCities;0;0;0;1) //disallow double-click to expand/collapse
 End case
```

#### See also 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[GET LIST PROPERTIES](get-list-properties.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  