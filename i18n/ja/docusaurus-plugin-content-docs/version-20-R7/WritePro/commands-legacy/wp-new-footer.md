---
id: wp-new-footer
title: WP New footer
slug: /WritePro/commands/wp-new-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP New footer.Syntax-->**WP New footer** ( *wpSection* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP New footer.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro セクションまたはサブセクション |
| 戻り値 | Object | &#8592; | 4D Write Pro フッター |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP New footer.Summary-->**WP New footer** コマンドは、*wpSection* 引数で定義されたセクションまたはサブセクションに割り当てられるフッターを作成し、それを返します。<!-- END REF-->

指定したセクションまたはサブセクションにフッター要素が既に定義されている場合、*未定義*のオブジェクトが返され、エラーが生成されます。

#### 例題 

セクションの左ページに対して、フッターを作成したい場合を考えます:

```4d
 var $section;$subsection;$footer : Object
  //最初のセクションを取得
 $section:=WP Get section(wpDoc;1)
  //最初のセクションの左サブセクションを取得
 $subsection:=WP Get subsection($section;wk left page)
 
  //サブセクションが存在するなら、フッターを設定する
 If($subsection#Null)
    $footer:=WP New footer($subsection)
 End if
```

#### 参照 

[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  