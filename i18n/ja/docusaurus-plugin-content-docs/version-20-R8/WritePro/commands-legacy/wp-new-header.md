---
id: wp-new-header
title: WP New header
slug: /WritePro/commands/wp-new-header
displayed_sidebar: docs
---

<!--REF #_command_.WP New header.Syntax-->**WP New header** ( *wpSection* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP New header.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | 4D Write Pro セクションまたはサブセクションの参照 |
| 戻り値 | Object | &#8592; | 4D Write Pro ヘッダー参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP New header.Summary-->**WP New header** コマンドは、*wpSection* 引数で定義されたセクションまたはサブセクションに割り当てられるヘッダーを作成し、それを返します。<!-- END REF-->

指定したセクションまたはサブセクションにヘッダー要素が既に定義されている場合、*未定義*のオブジェクトが返され、エラーが生成されます。

#### 例題 

セクションの右ページに対して、ヘッダーを作成したい場合を考えます:

```4d
 var $section;$subsection;$header : Object
  //最初のセクションを取得
 $section:=WP Get section(wpDoc;1)
  //最初のセクションの右サブセクションを取得
 $subsection:=WP Get subsection($section;wk right page)
 
  //サブセクションが存在するなら、ヘッダーを設定する
 If($subsection#Null)
    $header:=WP New header($subsection)
 End if
```

#### 参照 

[WP DELETE HEADER](wp-delete-header.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  