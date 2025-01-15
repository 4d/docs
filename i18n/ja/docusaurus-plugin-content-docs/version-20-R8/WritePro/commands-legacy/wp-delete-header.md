---
id: wp-delete-header
title: WP DELETE HEADER
slug: /WritePro/commands/wp-delete-header
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE HEADER.Syntax-->**WP DELETE HEADER** ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE HEADER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro セクションあるいはサブセクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP DELETE HEADER.Summary-->**WP DELETE HEADER** コマンドは*wpSection* 引数で定義されたセクションあるいはサブセクションに割り当てられたヘッダー要素を削除します。<!-- END REF-->

セクションあるいはサブセクションに対してヘッダー要素が存在しない場合、コマンドは何もしません。

#### 例題 

あるセクションの右ページのヘッダーを削除したい場合を考えます:

```4d
 var $section;$subsection;$header : Object
  //最初のセクションの参照を取得する
 $section:=WP Get section(wpDoc;1)
  //最初のセクションの左右ページのサブセクションの参照を取得する
 $subsection:=WP Get subsection($section;wk right page)
 
  //ヘッダーを削除する
 WP DELETE HEADER($subsection)
```

#### 参照 

[WP Get header](wp-get-header.md)  
[WP New header](wp-new-header.md)  