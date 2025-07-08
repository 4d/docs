---
id: wp-bookmark-range
title: WP Bookmark range
slug: /WritePro/commands/wp-bookmark-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Bookmark range.Syntax-->**WP Bookmark range** ( *wpDoc* ; *bkName* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Bookmark range.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Proドキュメント |
| bkName | Text | &#8594;  | レンジを取得したいブックマーク名 |
| 戻り値 | Object | &#8592; | ブックマークのレンジ |

<!-- END REF-->

## 説明 

<!--REF #_command_.WP Bookmark range.Summary-->**WP Bookmark range** コマンドは、*wpDoc*引数で指定した4D Write Proドキュメント内の、*bkName*引数で指定されたブックマークのレンジを格納したテキストレンジオブジェクト(rangeObj)を返します。<!-- END REF-->

*bkName* のブックマークが*wpDoc* のドキュメント内に存在しない場合、空のrangeObjオブジェクトが返されます。

## 例題 

ドキュメント内の"MyBookmark"ブックマークのレンジを表示したい場合を考えます:

```4d
 var $wpRange : Object
 $wpRange:=WP Bookmark range(WParea;"MyBookmark")
 WP SELECT(WParea;$wpRange)
```

## 参照 

[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  
[WP Text range](wp-text-range.md)  