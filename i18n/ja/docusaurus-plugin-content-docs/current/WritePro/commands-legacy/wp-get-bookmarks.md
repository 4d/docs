---
id: wp-get-bookmarks
title: WP GET BOOKMARKS
slug: /WritePro/commands/wp-get-bookmarks
displayed_sidebar: docs
---

<!--REF #_command_.WP GET BOOKMARKS.Syntax-->**WP GET BOOKMARKS** ( *wpDoc* ; *arrBKNames* )<!-- END REF-->
<!--REF #_command_.WP GET BOOKMARKS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Proドキュメント |
| arrBKNames | テキスト配列 | &#x1F858; | ブックマーク名の配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP GET BOOKMARKS.Summary-->**WP GET BOOKMARKS** コマンドは*wpDoc* 引数で指定した4D Write Proドキュメント内で定義されている全てのブックマーク名を含む配列を返します。<!-- END REF-->

コマンド実行後、*arrBKNames* 変数にはドキュメント内の全てのブックマーク名が格納されます。配列内ではブックマーク名はドキュメント内での位置によって並べ替えられています。

同じ位置から始まる複数のブックマークが存在する場合、それらはアルファベット順に並べられます。

#### 例題 

ドキュメント内で定義されているブックマークの数を知りたい場合を考えます:

```4d
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 ALERT("The document contains "+Size of array($_bookmarks)+" bookmarks.")
```

#### 参照 

[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  