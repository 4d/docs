---
id: wp-get-bookmarks
title: WP GET BOOKMARKS
slug: /WritePro/commands/wp-get-bookmarks
displayed_sidebar: docs
---

<!--REF #_command_.WP GET BOOKMARKS.Syntax-->**WP GET BOOKMARKS** ( *wpDoc* ; *arrBKNames* )<!-- END REF-->
<!--REF #_command_.WP GET BOOKMARKS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| arrBKNames | Text array | &#x1F858; | Array of bookmark names |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP GET BOOKMARKS.Summary-->The **WP GET BOOKMARKS** command returns an array containing the names of all bookmarks defined in *wpDoc*.<!-- END REF--> 

After the command is executed, the *arrBKNames* is filled with all the bookmark names in the document. In the array, names are sorted by bookmark position inside the document. If several bookmarks begin at the same position, they are sorted in alphabetical order. 

#### Example 

You want to know the number of bookmarks defined in your document:

```4d
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 ALERT("The document contains "+Size of array($_bookmarks)+" bookmarks.")
```

#### See also 

[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  