---
id: object-set-scrollbar
title: OBJECT SET SCROLLBAR
slug: /commands/object-set-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SCROLLBAR.Syntax-->**OBJECT SET SCROLLBAR** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET SCROLLBAR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| horizontal | Boolean, Integer | &#8594;  | Visibility of horizontal scrollbar |
| vertical | Boolean, Integer | &#8594;  | Visibility of vertical scrollbar |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET SCROLLBAR.Summary-->The OBJECT SET SCROLLBAR command allows you to display or hide the horizontal and/or vertical scrollbars in the object set using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you do not pass a string, but a variable reference. For more information about object names, refer to the *Object Properties* section. 

In the *horizontal* and *vertical* parameters, you pass values indicating whether the corresponding scrollbars should be displayed. You can pass either Boolean values (True=displayed, False=hidden), or numeric values (0=hidden, 1=displayed, 2=automatic mode). Using numeric values gives you access to the automatic mode, where scrollbars are only displayed when necessary.

The following table indicates the values you can pass in the *horizontal* and *vertical* parameters for objects that accept scrollbars (automatic mode is not available for all objects):

| **Objects with scrollbars**         | **Hide scrollbar** | **Show scrollbar** | **Automatic mode** |
| ----------------------------------- | ------------------ | ------------------ | ------------------ |
| Text object fields and variables    | False or 0         | True or 1          | *not available*    |
| Picture object fields and variables | False or 0         | True or 1          | 2                  |
| List boxes                          | False or 0         | True or 1          | 2                  |
| Hierarchical lists                  | False or 0         | True or 1          | 2                  |
| Subforms                            | False or 0         | True or 1          | *not available*    |

 By default, scrollbars are displayed.

**Note:** For more information about the automatic mode, refer to *Scroll bars*.

#### See also 

[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT GET SCROLLBAR](object-get-scrollbar.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 843 |
| Thread safe | &check; |
| Forbidden on the server ||


