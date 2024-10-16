---
id: wp-delete-footer
title: WP DELETE FOOTER
slug: /WritePro/commands/wp-delete-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE FOOTER.Syntax-->**WP DELETE FOOTER** ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE FOOTER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro セクションあるいはサブセクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP DELETE FOOTER.Summary-->**WP DELETE FOOTER** コマンドは、*wpSection* 引数で定義されたセクションあるいはサブセクションに割り当てられたフッター要素を削除します。<!-- END REF-->

セクションあるいはサブセクションに対してフッター要素が存在しない場合、コマンドは何もしません。

#### 例題 

あるセクションの左ページのフッターを削除したい場合を考えます:

```4d
 var $section;$subsection;$header : Object
  //最初のセクションの参照を取得する
 $section:=WP Get section(wpDoc;1)
  //最初のセクションの左サブセクションの参照を取得する
 $subsection:=WP Get subsection($section;wk left page)
 
  //フッターを削除する
 WP DELETE FOOTER($subsection)
```

#### 参照 

[WP Get footer](wp-get-footer.md)  
[WP New footer](wp-new-footer.md)  