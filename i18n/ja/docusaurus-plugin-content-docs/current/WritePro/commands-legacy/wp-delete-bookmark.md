---
id: wp-delete-bookmark
title: WP DELETE BOOKMARK
slug: /WritePro/commands/wp-delete-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE BOOKMARK.Syntax-->**WP DELETE BOOKMARK** ( *wpDoc* ; *bkName* )<!-- END REF-->
<!--REF #_command_.WP DELETE BOOKMARK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Proドキュメント |
| bkName | Text | &#8594;  | 削除するブックマークの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP DELETE BOOKMARK.Summary-->**WP DELETE BOOKMARK** コマンドは*wpDoc* 引数で指定した4D Write Proドキュメント内の、*bkName* 引数で指定した名前のブックマークを削除します。<!-- END REF-->

*bkName* 引数のブックマークがの*wpDoc* ドキュメント内に存在しない場合、コマンドは何もしません。

#### 例題 

既存のブックマークの名前を変更したい場合を考えます。そのためには、同じレンジを使用した新しいブックマークを作成し、古い方を削除する必要があります:

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

#### 参照 

[WP Bookmark range](wp-bookmark-range.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  