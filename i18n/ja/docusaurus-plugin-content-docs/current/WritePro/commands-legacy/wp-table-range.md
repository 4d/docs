---
id: wp-table-range
title: WP Table range
slug: /WritePro/commands/wp-table-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Table range.Syntax-->**WP Table range** ( *targetObj* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Table range.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro ドキュメント、レンジまたは要素 |
| 戻り値 | Object | &#8592; | 表のみを格納したレンジオブジェクト |

<!-- END REF-->

#### 互換性に関する注意 

<!--REF #_command_.WP Table range.Summary-->**WP Table range** was named **WP Create table range** in previous versions of 4D Write Pro.<!-- END REF--> It has been renamed for clarity. 

#### 説明 

**WP Table range** コマンドは、*targetObj* 引数内のオブジェクトと交差する表のみを指定するレンジオブジェクトを返します。渡した*targetObj* 引数に表が含まれていなかったとしても、wk type tableのレンジが返されます。返されたレンジオブジェクトは[WP GET ATTRIBUTES](../commands/wp-get-attributes.md) および [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) で使用することで、表及び表の中身に適用される属性を管理することができます。

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素 (本文 / ヘッダー / フッター / 段落 / セクション / サブセクション)
* 4D Write Pro ドキュメント

#### 例題 

テーブルレンジ内に格納されている表の外見を変更したい場合を考えます:

```4d
 tableRange:=WP Table range(myDoc)
  //テーブル属性
 WP SET ATTRIBUTES(tableRange;wk border style;wk solid;wk border color;"Blue";wk border width;"3px")
 WP SET ATTRIBUTES(tableRange;wk table align;wk center)
  //テキスト属性
 WP SET ATTRIBUTES(tableRange;wk font size;12)
 WP SET ATTRIBUTES(tableRange;wk text transform;wk capitalize)
 WP SET ATTRIBUTES(tableRange;wk font bold;wk true)
```

#### 参照 

[WP Get elements](wp-get-elements.md)  
[WP Text range](wp-text-range.md)  