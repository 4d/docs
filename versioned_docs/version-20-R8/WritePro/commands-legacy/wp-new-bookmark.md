---
id: wp-new-bookmark
title: WP NEW BOOKMARK
slug: /WritePro/commands/wp-new-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP NEW BOOKMARK.Syntax-->**WP NEW BOOKMARK** ( *targetObj* ; *bkName* )<!-- END REF-->
<!--REF #_command_.WP NEW BOOKMARK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Range or element |
| bkName | Text | &#8594;  | Name of bookmark to create |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP NEW BOOKMARK.Summary-->The **WP NEW BOOKMARK** command creates a new bookmark named *bkName* based upon the 4D Write Pro *targetObj* in the parent document.<!-- END REF-->

Bookmarks are named references to ranges or elements, which allow you to access and reuse specific parts of the document, for example for templating purposes. For more information, please refer to the *Bookmark commands* section.

In *targetObj*, you can pass:

* a range, or
* an element (body / table / row / inline picture / paragraph)

**Note**: If you passed an element in *targetObj*, the bookmark will contain only the specified element.

In *bkName*, pass the name for the new bookmark. A bookmark name must be compliant with HTML/CSS names, *i.e.* it must only contain alphanumeric characters (invalid characters, such as space characters, are automatically removed). Bookmark names must be unique within the document. If a bookmark with the same name already exists in the document, it is overwritten. 

You can create as many bookmarks as you want within the same document. Multiple bookmarks can be created using the exact same range. Once created, a bookmark is automatically stored in the parent document and is saved with the document itself. 

#### Example 1 

You want to create a new bookmark referencing the currently selected text in the document. You can write:

```4d
 var $range : Object
 $range:=WP Selection range(*;"WPDocument")
 WP NEW BOOKMARK($range;"my_bookmark")
```

#### Example 2 

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
    WP NEW BOOKMARK($wpRange;$bookmarkNewName)
 End if
```

#### See also 

  
[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  