---
id: set-list-item-properties
title: SET LIST ITEM PROPERTIES
slug: /commands/set-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM PROPERTIES.Syntax-->**SET LIST ITEM PROPERTIES** ( {* ;} *list* ; itemRef | * ; *enterable* ; *styles* {; *icon* {; *color*}} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) or Name of list type object (if * passed) |
| itemRef &#124; * | Operator, Longint | &#8594;  | Item reference number, or 0 for last item appended to the list, or * for the current list item |
| enterable | Boolean | &#8594;  | TRUE = Enterable, FALSE = Non-enterable |
| styles | Integer | &#8594;  | Font style for the item |
| icon | Text, Integer | &#8594;  | Picture name or number ("" or 0 for no icon) |
| color | Integer | &#8594;  | RGB color value or -1 = reset to original color |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET LIST ITEM PROPERTIES.Summary-->The **SET LIST ITEM PROPERTIES** command modifies the item designated by the *itemRef* parameter within the list whose reference number or object name is passed in *list*.<!-- END REF--> 

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second *\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second *\** is passed), the syntax based on the object name is required since each representation can have its own current item.

You can pass a reference number in *itemRef*. If there is no item with the item reference number that is passed, the command does nothing. You can optionally pass *0* in *itemRef* to modify the last item added to the list using [APPEND TO LIST](append-to-list.md).

Lastly, you can pass *\** in *itemRef*: in this case, the command will apply to the current item of the list. If several items are selected manually, the current item is the one that was selected last. If no item is selected, the command does nothing.

If you work with item reference numbers, build a list in which items have unique reference numbers, otherwise you will not be able to distinguish the items. For more information, refer to the *Managing Hierarchical Lists* section.

**Note:** To change the text of the item or its sublist, use the command [SET LIST ITEM](set-list-item.md).

To make an item enterable, pass TRUE in *enterable*; otherwise, pass FALSE.

**Important:** In order for an item to be enterable, it must belong to a list that is enterable. To make a whole list enterable, use the [OBJECT SET ENTERABLE](object-set-enterable.md) command. To make an individual list item enterable, use **SET LIST ITEM PROPERTIES**. Changing the enterable property at the list level does not affect the enterable properties of the items. However, an item can be enterable only if its list is enterable.

You specify the font style of the item in the *styles* parameter. You pass a combination (one or a sum) of the following predefined constants (*Font Styles* theme):

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Bold      | Integer | 1     |
| Italic    | Integer | 2     |
| Plain     | Integer | 0     |
| Underline | Integer | 4     |

In the *icon* parameter, you can pass a picture to be used as the icon for the item. You can use a picture file reference or (binary databases only) a library picture.

* Picture file reference (text): you must use the **path:<filesystem path>** pattern. For more information, refer to the *Filesystem pathnames* paragraph.
* Library picture (longint or text, binary databases only): you can pass either the name or number of the picture. It is generally preferable to use its number rather than its name since picture numbers are unique IDs, which is not the case with names. If you want to use a number, pass Use PicRef+*N* in the parameter, where *N* is the reference number of the picture in the picture library. Use PicRef is a predefined constant located in the *Hierarchical Lists* theme.
* Pass an empty string ("") or zero (0) in *icon* if you do not want any graphic for the item.

**Notes:**

* Use of a picture file path is recommended since the Picture library is deprecated and is not supported in 4D projects.
* If you want to use 4D picture expressions (fields, variables, etc.) to specify the icons of the items, use the [SET LIST ITEM ICON](set-list-item-icon.md) command.

The *color* parameter (optional) lets you modify the color of the item text. The color must be specified in the form of an RGB color, i.e. a 4-byte longint in the 0x00RRGGBB format. For more information about this format, refer to the description of the [OBJECT SET RGB COLORS](object-set-rgb-colors.md) command. Pass -1 in the *color* parameter to reset the original color of the item.

#### Example 1 

See the example for the [APPEND TO LIST](append-to-list.md) command.

#### Example 2 

The following example changes the text of the current item of *list* to bold and bright red:

```4d
 SET LIST ITEM PROPERTIES(list;*;True;Bold;0;0x00FF0000)
```

#### See also 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
*Hierarchical Lists*  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  