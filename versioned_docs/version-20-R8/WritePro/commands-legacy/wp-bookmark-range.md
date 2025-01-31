---
id: wp-bookmark-range
title: WP Bookmark range
slug: /WritePro/commands/wp-bookmark-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Bookmark range.Syntax-->**WP Bookmark range** ( *wpDoc* ; *bkName* ) : Object<!-- END REF-->
<!--REF #_command_.WP Bookmark range.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| bkName | Text | &#8594;  | Name of bookmark whose range you want to get |
| Function result | Object | &#8592; | Range of bookmark |

<!-- END REF-->

#### Compatibility 

<!--REF #_command_.WP Bookmark range.Summary-->**WP Bookmark range** was named **WP Get bookmark range** in previous versions of 4D Write Pro.<!-- END REF--> It has been renamed for clarity. 

#### Description 

The **WP Bookmark range** command returns a text range object (rangeObj) containing the range for the bookmark with the specified *bkName* in *wpDoc*.

If the *bkName* bookmark does not exist in *wpDoc*, an empty rangeObj object is returned.

#### Example 

You want to show the range of the "MyBookmark" bookmark in your document:

```4d
 var $wpRange : Object
 $wpRange:=WP Bookmark range(WParea;"MyBookmark")
 WP SELECT(WParea;$wpRange)
```

#### See also 

[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  
[WP Text range](wp-text-range.md)  