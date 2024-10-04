---
id: wp-delete-text-box
title: WP DELETE TEXT BOX
slug: /WritePro/commands/wp-delete-text-box
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE TEXT BOX.Syntax-->**WP DELETE TEXT BOX** ( *textBox* )<!-- END REF-->
<!--REF #_command_.WP DELETE TEXT BOX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| textBox | Object | &#x1F852; | Text box |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE TEXT BOX.Summary-->The **WP DELETE TEXT BOX** command deletes the text box defined by the *textBox* parameter.<!-- END REF-->

If *textBox* does not exist, the command does nothing.

#### Example 

You want to delete a text box using its ID:

```4d
 var $myTextBox : Object
 
  // Get the text box
 $myTextBox:=WP Get element by ID(myDoc;"AddressBox")
 
  // Delete the text box
 WP DELETE TEXT BOX($myTextBox)
```

#### See also 

[WP New text box](wp-new-text-box.md)  