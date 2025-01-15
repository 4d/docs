---
id: wp-delete-picture
title: WP DELETE PICTURE
slug: /WritePro/commands/wp-delete-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE PICTURE.Syntax-->**WP DELETE PICTURE** ( *imgObj* )<!-- END REF-->
<!--REF #_command_.WP DELETE PICTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| imgObj | Object | &#8594;  | Image object (inline or anchored) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE PICTURE.Summary-->The **WP DELETE PICTURE** command deletes the image defined by the *imgObj* parameter.<!-- END REF-->

If no image exists, the command does nothing.

#### Example 

You want to delete an image using its ID:

```4d
 var $myPicture : Object
 
  // get image  
 $myPicture:=WP Get element by ID(myDoc;"Logo")
 
  // Delete the image
 WP DELETE PICTURE($myPicture)
```

#### See also 

*Handling pictures*  
[WP Add picture](../commands/wp-add-picture.md)  