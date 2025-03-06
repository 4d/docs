---
id: get-list-properties
title: GET LIST PROPERTIES
slug: /commands/get-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST PROPERTIES.Syntax-->**GET LIST PROPERTIES** ( *list* ; *appearance* {; *icon* {; *lineHeight* {; *doubleClick* {; *multiSelections* {; *editable*}}}}} )<!-- END REF-->
<!--REF #_command_.GET LIST PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | List reference number |
| appearance | Integer | &#8592; | Graphical style of the list 1 = Hierarchical list a la Macintosh 2 = Hierarchical list a la Windows |
| icon | Integer | &#8592; | *** Deprecated, always 0 *** |
| lineHeight | Integer | &#8592; | Minimal line height expressed in pixels |
| doubleClick | Integer | &#8592; | Expand/Collapse sublist on double-click? 0 = Yes, 1= No |
| multiSelections | Integer | &#8592; | Multiple selections: 0 = No, 1 = Yes |
| editable | Integer | &#8592; | List editable by user: 0 = No, 1 = Yes |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET LIST PROPERTIES.Summary-->The **GET LIST PROPERTIES** command returns information about the list whose reference number you pass in *list*.<!-- END REF-->

The *appearance* parameter returns the graphical style of the list.

The *icon* parameter returns the resource IDs of the node icons displayed in the list.

The *lineHeight* parameter returns the minimal line height.

If *doubleClick* is set to 1, double-clicking on a parent list item does not provoke its child list to expand or to collapse. If *doubleClick* is set to 0, this behavior is active (defaut value).

If the *multiSelections* parameter is set to 0, multiple selections of items (manually or by programming) are not possible in the list. If it is set to 1, multiple selections are allowed. 

If the *editable* parameter is set to 1, the list is editable when it is displayed as a choice list in a record. If it is set to 0, the list is not editable. 

These properties can be set using the [SET LIST PROPERTIES](set-list-properties.md) command and/or in the Design environment List Editor, if the list was created there or saved using the [SAVE LIST](save-list.md) command.

For a complete description of the appearance, node icons, minimal line height and double-click management of a list, see the [SET LIST PROPERTIES](set-list-properties.md) command.

#### See also 

[SET LIST PROPERTIES](set-list-properties.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 632 |
| Thread safe | &cross; |


