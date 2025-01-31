---
id: wp-get-body
title: WP Get body
slug: /WritePro/commands/wp-get-body
displayed_sidebar: docs
---

<!--REF #_command_.WP Get body.Syntax-->**WP Get body** ( *wpDoc* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get body.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| 戻り値 | Object | &#8592; | 4D Write Pro ボディ(本文) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get body.Summary-->**WP Get body** コマンドは*wpDoc* 引数で指定した4D Write Pro ドキュメントのボディ(本文)を返します。<!-- END REF-->

この要素は以下のコマンドに対して渡すことができます:

* [WP SELECT](wp-select.md) コマンドに渡してドキュメントのボディを選択
* [WP Text range](wp-text-range.md) コマンドに渡してボディをレンジとして定義
* [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) と [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) コマンドに渡してボディの属性を管理

#### 例題 

ある4D Write Pro ドキュメントのボディを他の4D Write Pro ドキュメントにコピーする場合を考えます:

```4d
 var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object
 
 $bodySource:=WP Get body([TEMPLATES]WPtemplate)
 $rangeSource:=WP Text range($bodySource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $bodyTarget:=WP Get body([Docs]MyWPDoc)
 $rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### 参照 

[WP Text range](wp-text-range.md)  