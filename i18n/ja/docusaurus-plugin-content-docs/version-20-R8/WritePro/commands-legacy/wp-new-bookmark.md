---
id: wp-new-bookmark
title: WP NEW BOOKMARK
slug: /WritePro/commands/wp-new-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP NEW BOOKMARK.Syntax-->**WP NEW BOOKMARK** ( *targetObj* ; *bkName* )<!-- END REF-->
<!--REF #_command_.WP NEW BOOKMARK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素 |
| bkName | Text | &#8594;  | 作成するブックマーク名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP NEW BOOKMARK.Summary-->**WP NEW BOOKMARK**コマンドは、親ドキュメント内の *targetObj* 引数で指定された4D Write Proオブジェクトに基づいた、*bkName* 引数で指定された名前の新しいブックマークを作成します。<!-- END REF-->

ブックマークとはレンジや要素への命名された参照で、これによって例えばテンプレート目的などでドキュメントの特定の部分にアクセスして再利用することができるようになります。詳細な情報については、*ブックマークコマンド* の章を参照してください。

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素 (本文 / テーブル / 行 / インラインピクチャー / 段落)

**注**: 要素を*targetObj* 引数に渡した場合、ブックマークはその指定された要素のみを含みます。

*bkName* 引数には新しいブックマークの名前を渡して下さい。ブックマーク名はHTML/CSS名に準拠している、つまり英数字以外を使用してはいけません(スペース文字などの無効な文字は自動的に削除されます)。ブックマーク名はドキュメント内において固有でなければなりません。同じ名前のブックマークが既にドキュメント内に存在していた場合、それは上書きされます。

ブックマークは同一ドキュメント内において無制限に作成することができます。同一のレンジを使用した複数のブックマークを作成することもできます。作成したあとは、ブックマークは自動的に親ドキュメントに保存され、そのドキュメント自身と共に保存されます。

#### 例題 1 

ドキュメント内で現在選択されているテキストを参照する新しいブックマークを作成したい場合を考えます。以下のように書く事ができます:

```4d
 var $range : Object
 $range:=WP Selection range(*;"WPDocument")
 WP NEW BOOKMARK($range;"my_bookmark")
```

#### 例題 2 

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
    WP NEW BOOKMARK($wpRange;$bookmarkNewName)
 End if
```

#### 参照 

  
[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  