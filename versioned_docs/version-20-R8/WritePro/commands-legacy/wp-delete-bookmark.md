---
id: wp-delete-bookmark
title: WP DELETE BOOKMARK
slug: /WritePro/commands/wp-delete-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE BOOKMARK.Syntax-->**WP DELETE BOOKMARK** ( *wpDoc* ; *bkName* )<!-- END REF-->
<!--REF #_command_.WP DELETE BOOKMARK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| bkName | Text | &#8594;  | Name of bookmark to delete |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE BOOKMARK.Summary-->The **WP DELETE BOOKMARK** command removes the bookmark named *bkName* from *wpDoc*.<!-- END REF-->

If the *bkName* bookmark does not exist in *wpDoc*, the command does nothing.

#### Example 

You want to rename an existing bookmark. To do this, you need to create a new bookmark with the same range, and then delete the old one:

```4d
 var $bookmarkOldName : Text
 var $bookmarkNewName : Text
 var $p : Integer
 var $wpRange : Object
 
 $bookmarkOldName:="MyBookmark"
 $bookmarkNewName:="MyNewBookmark"
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 
 $p:=Find in array($_bookmarks;$bookmarkOldName)
 If($p>0)
    $wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)
    WP DELETE BOOKMARK(WParea;$bookmarkOldName)
    WP DELETE BOOKMARK($wpRange;$bookmarkNewName)
 End if
```

#### See also 

[WP Bookmark range](wp-bookmark-range.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  